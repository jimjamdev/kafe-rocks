import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import * as styles from "./game-category-list.module.scss";
import GameCategory from "@components/organisms/game-category-list/game-category";

//todo: Need to figure out the types here, gives a type error from Rocket_PhotosPage
interface IGameCategoryList extends IBase {
  categories: any[];
}

const GameCategoryList: React.FunctionComponent<IGameCategoryList> = ({
  categories,
  as = `header`,
}) => {
  const classNames = clsx(styles.root, {});

  console.log(`categories`, categories);

  const renderCategoryList = () => {
    return (
      categories &&
      categories.map((category) => {
        const { title, thumbnailUrl } = category;
        return (
          <GameCategory key={title} title={title} thumbnail={thumbnailUrl} />
        );
      })
    );
  };

  return (
    <Base className={classNames} as={as}>
      {renderCategoryList()}
    </Base>
  );
};

export default GameCategoryList;
