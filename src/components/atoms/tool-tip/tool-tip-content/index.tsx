import * as React from "react";
import clsx from "clsx";
import * as styles from "./tool-tip-content.module.scss";
import Base, { IBase } from "@components/atoms/base";

type ITooltip = IBase;

const TooltipContent: React.FunctionComponent<ITooltip> = ({
  text,
  show,
}) => {
  const classNames = clsx(styles.root, {
    [styles.show]: show,
  });

  return <Base className={classNames}>{text}</Base>;
};

export default TooltipContent;
