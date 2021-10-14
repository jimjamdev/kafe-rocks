import * as React from "react";
const { useState } = React;
import Base, { IBase } from "@components/atoms/base";
import truncateText from "@functions/truncate-text";

interface IExpander extends IBase {
  text?: string;
  truncateAmount: number;
  suffix: string;
  moreText: string;
  closeText: string;
}

const Expander: React.FunctionComponent<IExpander> = ({
  text = ``,
  className,
  truncateAmount = 10,
  suffix = `...`,
  moreText = `Visa mer`,
  closeText = `Close`,
  as,
}) => {
  const [open, setOpen] = useState(false);
  console.log(`text`, text);

  const renderText = (open: boolean) => {
    if (open) {
      return `${text}${suffix}`;
    } else {
      return truncateText(text, truncateAmount, suffix);
    }
  };

  const toggleOpen = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <Base className={className} as={as}>
      {renderText(open)}
      <a href="#" onClick={toggleOpen}>
        {!open && moreText}
        {open && closeText}
      </a>
    </Base>
  );
};

export default Expander;
