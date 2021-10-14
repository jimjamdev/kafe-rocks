import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import * as styles from "./casinos-list.module.scss";
import CasinoListItem from "@components/organisms/casinos-list/casino-list-item";

//todo: Need to figure out the types here, gives a type error from Rocket_PhotosPage
interface ICasinosList extends IBase {
  casinos: any[];
}

const CasinosList: React.FunctionComponent<ICasinosList> = ({
  casinos,
  as = `header`,
}) => {
  const classNames = clsx(styles.root, {});

  const renderCasinosList = () => {
    return (
      casinos &&
      casinos.map((casino) => {
        const { title, thumbnailUrl } = casino;
        return (
          <CasinoListItem
            key={title}
            title={title}
            thumbnail={thumbnailUrl}
            rating="full"
          />
        );
      })
    );
  };

  return (
    <Base className={classNames} as={as}>
      {renderCasinosList()}
    </Base>
  );
};

export default CasinosList;
