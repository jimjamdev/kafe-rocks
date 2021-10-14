import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import * as styles from "./icon.module.scss";

interface IIcon extends IBase {
  size?: "small" | "medium" | "large";
  color?: "light" | "dark" | "medium";
  name?: string;
  OnClick?: any;
}

const Icon: React.FunctionComponent<IIcon> = ({
  as = `span`,
  size = `medium`,
  className,
  onClick,
  name = `menu`,
}) => {
  const classNames = clsx(styles.root, {
    [styles.sizeSmall]: size === `small`,
    [styles.sizeMedium]: size === `medium`,
    [styles.sizeLarge]: size === `large`,
  });

  return (
    <Base
      className={`${classNames} ${className && className}`}
      onClick={onClick}
      as={as}
    >
      {name}
    </Base>
  );
};

export default Icon;
