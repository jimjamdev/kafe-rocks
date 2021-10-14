import * as React from "react";
const { useState } = React;
import clsx from "clsx";
import * as styles from "./tool-tip.module.scss";
import Base, { IBase } from "@components/atoms/base";
import TooltipContent from "./tool-tip-content";

type ITooltip = IBase;

const Tooltip: React.FunctionComponent<ITooltip> = ({ children, text }) => {
  const [show, setShow] = useState(false);

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setShow(!show);
  };

  const classNames = clsx(styles.root, {});

  return (
    <Base className={classNames} onClick={handleClick}>
      {children}
      <TooltipContent show={show} text={text} />
    </Base>
  );
};

export default Tooltip;
