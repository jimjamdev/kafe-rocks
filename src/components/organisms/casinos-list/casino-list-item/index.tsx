import Rating from "@components/molecules/rating";
import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import Image from "@components/atoms/image";
import Text from "@components/atoms/text";
import * as styles from "./casino-list-item.module.scss";
import truncateText from "@functions/truncate-text";

interface ICasinoListItem extends IBase {
  title: string;
  thumbnail: string;
  rating: "empty" | "half" | "full";
}

const CasinoListItem: React.FunctionComponent<ICasinoListItem> = ({
  title,
  thumbnail,
  rating,
  as = `header`,
}) => {
  const classNames = clsx(styles.root, {});

  return (
    <Base className={classNames} as={as}>
      <Image alt={title} src={thumbnail} width="50px" height="50px" rounded />
      <Text
        as="h3"
        color="darker"
        size="medium"
        ellipsis
        className="padding-left-md"
      >
        {truncateText(title, 1, ``)}
      </Text>
      <Rating className={styles.last} rating="full" />
    </Base>
  );
};

export default CasinoListItem;
