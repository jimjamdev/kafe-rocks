import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import Image from "@components/atoms/image";
import Text from "@components/atoms/text";
import * as styles from "./game-category.module.scss";
import truncateText from "@functions/truncate-text";

interface IGameCategory extends IBase {
  title: string;
  thumbnail: string;
}

const GameCategory: React.FunctionComponent<IGameCategory> = ({
  title,
  thumbnail,
  as = `header`,
}) => {
  const classNames = clsx(styles.root, {});

  return (
    <Base className={classNames} as={as}>
      <Image alt={title} src={thumbnail} width="50px" height="50px" rounded />
      <Text
        as="h3"
        color="light"
        size="medium"
        ellipsis
        className="padding-left-md"
      >
        {truncateText(title, 1, ``)}
      </Text>
    </Base>
  );
};

export default GameCategory;
