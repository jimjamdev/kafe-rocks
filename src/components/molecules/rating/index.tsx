import * as React from "react";
const { useState, useEffect } = React;
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import Icon from "@components/atoms/icon";
import * as styles from "./ratings.module.scss";

interface IRating extends IBase {
  rating?: "empty" | "half" | "full";
}

const Rating: React.FunctionComponent<IRating> = ({
  rating,
  className,
  as = `header`,
}) => {
  const [ratingNumber, setRatingNumber] = useState(0);

  console.log(`rating`, rating, `ratingNumber`, ratingNumber);

  useEffect(() => {
    if (rating === `full`) {
      setRatingNumber(5);
    } else if (rating === `half`) {
      setRatingNumber(3);
    }
  }, []);

  const renderRatings = (num: number) => {
    return [...Array(num)].map((item, i) => {
      return <Icon key={i} name="star_rate" className={styles.star} />;
    });
  };

  const classNames = clsx(styles.root, {});
  return (
    <Base className={`${classNames} ${className}`} as={as}>
      {renderRatings(ratingNumber)}
    </Base>
  );
};

export default Rating;
