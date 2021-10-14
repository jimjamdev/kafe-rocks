import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import * as styles from "./header.module.scss";

interface IHeader extends IBase {
  size?: "small" | "medium" | "large";
  color?: "light" | "dark" | "medium";
}

const Header: React.FunctionComponent<IHeader> = ({
  children,
  as = `header`,
}) => {
  const classNames = clsx(styles.root, {});

  return (
    <Base className={classNames} as={as}>
      {children}
    </Base>
  );
};

export default Header;
