import * as React from "react";
import clsx from "clsx";
import * as styles from "./home-heading.module.scss";

interface IHomeHeading {
  left: React.ReactNode;
  right: React.ReactNode;
}

const HomeHeading: React.FunctionComponent<IHomeHeading> = ({
  left,
  right,
}) => {
  const classNames = clsx(styles.root, {});

  return (
    <article className={classNames}>
      <div>{left}</div>
      <div>{right}</div>
    </article>
  );
};

export default HomeHeading;
