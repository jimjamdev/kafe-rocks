import * as React from "react";
const { Fragment } = React;
import { graphql, PageProps } from "gatsby";
import { Rocket_Photo, Rocket_Post } from "@typings/graphql-types";

// Ui
import Seo from "@components/atoms/seo";
import Container from "@components/atoms/container";
import Header from "@components/organisms/header";
import Card from "@components/atoms/card";
import Title from "@components/atoms/title";
import Text from "@components/atoms/text";
import Icon from "@components/atoms/icon";
import Tooltip from "@components/atoms/tool-tip";
// Project specific UI - dumped into /organisms
import HomeHeading from "@components/organisms/home-heading";
import GameCategoryList from "@components/organisms/game-category-list";
import CasinosList from "@components/organisms/casinos-list";
import Expander from "@components/atoms/expander";

interface IPostsType extends PageProps {
  data: {
    rocket: {
      post: Rocket_Post;
      photos: {
        data: [Rocket_Photo];
      };
    };
  };
}

// markup
const IndexPage: React.FunctionComponent<IPostsType> = ({
  data: { rocket },
}) => {
  const {
    post = {},
    photos: { data: photosList = [] },
  } = rocket;

  const casinosList = photosList.slice(0, 4);
  const postTitle = post?.title || ``;
  const postBody: string = post?.body || ``;

  return (
    <main>
      {/* <Seo title="Test Demo" description="Some weird demo" />*/}
      <Container>
        <Header>
          {/* Unlike Base component, I'm spitting out some static classes for re-use. However, this could be tied into atoms/base as part of a design system */}
          <Tooltip text={post?.body}>
            <Icon name="info" size="large" className="margin-right-sm" />
            <Text>Reklam</Text>
          </Tooltip>
        </Header>
        {/* Custom site specific component - would be better to work on a css-grid component that allows you to adjust rows dynamically per breakpoint - TIME,TIME,TIME */}
        <HomeHeading
          left={
            <Fragment>
              <Title size="large" color="dark">
                Alla Casinon Online recensioner samlade
              </Title>
              <Title as="h2" size="medium">
                Din destination innan du spelar
              </Title>
              <Text>Din destination innan du spelar</Text>
              <Text color="primary" marginTop>
                Varfor lita pa oss
              </Text>
            </Fragment>
          }
          right={
            <Fragment>
              <Card
                as="aside"
                filled
                rounded
                shadow="z1"
                marginBottom // example of using a static margin from base
              >
                <Title as="h3">Sverigues mest populara casinon</Title>
                <CasinosList casinos={casinosList} />
              </Card>
            </Fragment>
          }
        />
        {/* Spit out a list of game categories */}
        <GameCategoryList categories={photosList} />
        <Card
          filled
          backgroundColor="primary"
          rounded
          shadow="z2"
          marginTop
          marginBottom
        >
          <Title>{postTitle}</Title>
          <Expander
            text={postBody}
            truncateAmount={5}
            suffix="..."
            moreText="Visa mer"
            closeText="Close"
          />
        </Card>
      </Container>
    </main>
  );
};

// Test graphql query
export const getPostsQuery = graphql`
  query {
    rocket {
      post(id: 1) {
        id
        title
        body
      }
      photos(options: { paginate: { page: 1, limit: 8 } }) {
        data {
          title
          thumbnailUrl
        }
      }
    }
  }
`;

export default IndexPage;
