import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import * as styles from "./container.module.scss";

interface IContainer extends IBase {
  maxWidth?: string;
}

const Container: React.FunctionComponent<IContainer> = ({
  children,
  as,
  maxWidth,
  backgroundColor,
}) => {
  const classNames = clsx(styles.root, {});

  return (
    <Base
      className={classNames}
      style={{ maxWidth }}
      backgroundColor={backgroundColor}
      as={as}
    >
      {children}
    </Base>
  );
};

export default Container;
