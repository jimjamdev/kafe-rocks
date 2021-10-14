/**
 * So the idea here is to have a base module with common props
 * Maybe there's a design system in place with common colors, margins/paddings
 * We could essentially always extend base and pass in the required properties.
 * This system makes more sense if you're pulling the UI config from a cms. Instead of classes or static scss style, using props
 * Right now, I'm only passing backgroundColor, margin, and an "as" prop. <Title as="h1" backgroundColor="primary">Some title</Title>
 * ToDo: duplicate styles
 */

import * as React from "react";
import clsx from "clsx";
import * as styles from "./base.module.scss";

export interface IBase {
  as?: string;
  color?: string;
  backgroundColor?: string;
  margin?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  marginLeft?: boolean;
  marginRight?: boolean;
  [x: string]: any; // Because it's a Base and we don't know what props we'll be using
}

const Base: React.FunctionComponent<IBase> = ({
  children,
  as = `div`,
  className,
  color,
  backgroundColor,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  ...props
}) => {
  const CustomTag = `${as}` as any;
  const classNames = clsx(className, {
    [styles.backgroundColorLight]: backgroundColor === `light`,
    [styles.backgroundColorMedium]: backgroundColor === `medium`,
    [styles.backgroundColorDark]: backgroundColor === `dark`,
    [styles.backgroundColorDarker]: backgroundColor === `darker`,
    [styles.backgroundColorPrimary]: backgroundColor === `primary`,
    [styles.backgroundColorSecondary]: backgroundColor === `secondary`,
    [styles.margin]: margin,
    [styles.marginLeft]: marginLeft,
    [styles.marginRight]: marginRight,
    [styles.marginTop]: marginTop,
    [styles.marginBottom]: marginBottom,
  });

  return (
    <CustomTag className={`${classNames}`} {...props}>
      {children}
    </CustomTag>
  );
};

export default Base;
