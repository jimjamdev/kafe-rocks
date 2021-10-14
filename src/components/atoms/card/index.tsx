import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import * as styles from "./card.module.scss";

interface ICard extends IBase {
  rounded?: boolean;
  shadow?: "z1" | "z2" | "z3";
  filled?: boolean;
}

const Card: React.FunctionComponent<ICard> = ({
  children,
  as,
  className,
  rounded,
  shadow,
  filled,
  backgroundColor,
  margin,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}) => {
  const classNames = clsx(styles.root, {
    [styles.rounded]: rounded === true,
    [styles.shadowZ1]: shadow === `z1`,
    [styles.shadowZ2]: shadow === `z2`,
    [styles.shadowZ3]: shadow === `z3`,
    [styles.filled]: filled,
  });
  return (
    <Base
      className={`${classNames} ${className}`}
      as={as}
      backgroundColor={backgroundColor}
      margin={margin}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </Base>
  );
};

export default Card;
