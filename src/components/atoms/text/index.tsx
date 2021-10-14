import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import * as styles from "./text.module.scss";

interface IText extends IBase {
  size?: "small" | "medium" | "large";
  color?: "light" | "dark" | "medium" | "darker" | "primary" | "secondary";
  ellipsis?: boolean;
}

const Text: React.FunctionComponent<IText> = ({
  children,
  className,
  as,
  size = `medium`,
  color,
  ellipsis,
  marginTop,
}) => {
  const classNames = clsx(styles.root, {
    [styles.small]: size === `small`,
    [styles.medium]: size === `medium`,
    [styles.large]: size === `large`,
    [styles.medium]: color === `medium`,
    [styles.light]: color === `light`,
    [styles.dark]: color === `dark`,
    [styles.darker]: color === `darker`,
    [styles.primary]: color === `primary`,
    [styles.secondary]: color === `secondary`,
    [styles.ellipsis]: ellipsis,
  });

  return (
    <Base
      className={`${classNames} ${className}`}
      as={as}
      marginTop={marginTop}
    >
      {children}
    </Base>
  );
};

export default Text;
