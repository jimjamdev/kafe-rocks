import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import * as styles from "./title.module.scss";

interface ITitle extends IBase {
  size?: "small" | "medium" | "large";
  color?: "light" | "dark" | "medium" | "darker";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  ellipsis?: boolean;
}

const Title: React.FunctionComponent<ITitle> = ({
  children,
  className,
  as = `h1`,
  size = `medium`,
  color = `dark`,
  ellipsis,
}) => {
  const classNames = clsx(styles.root, {
    [styles.small]: size === `small`,
    [styles.medium]: size === `medium`,
    [styles.large]: size === `large`,
    [styles.light]: color === `light`,
    [styles.medium]: color === `medium`,
    [styles.dark]: color === `dark`,
    [styles.ellipsis]: ellipsis,
  });

  return (
    <Base className={`${classNames} ${className}`} as={as}>
      {children}
    </Base>
  );
};

export default Title;
