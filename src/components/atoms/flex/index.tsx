/** Thought i'd try this out, not using it, but kept just to remind me not to be dumb
 * Issues, i'd have to create a billion classes to make on the fly changes between mobile, tablet, desktop etc.
 * Handy when using css-in-js as themeable properties are much better and you can do a lot more. Not so great here.
 * **/

import * as React from "react";
import clsx from "clsx";
import Base from "@components/atoms/base";
import * as styles from "./flex.module.scss";
import { IFlex } from "./flex.interface";

const Flex: React.FunctionComponent<IFlex> = ({
  children,
  as,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
}) => {
  const classNames = clsx(styles.root, {
    [styles.inlineFlex]: display === `inline-flex`,
    [styles.directionRow]: flexDirection === `row`,
    [styles.directionRowReverse]: flexDirection === `row-reverse`,
    [styles.directionColumn]: flexDirection === `column`,
    [styles.directionColumnReverse]: flexDirection === `column-reverse`,
    [styles.wrapNoWrap]: flexWrap === `nowrap`,
    [styles.wrap]: flexWrap === `wrap`,
    [styles.wrapReverse]: flexWrap === `wrap-reverse`,
    [styles.justifyContentFlexStart]: justifyContent === `flex-start`,
    [styles.justifyContentFlexEnd]: justifyContent === `flex-end`,
    [styles.justifyContentCenter]: justifyContent === `center`,
    [styles.justifyContentSpaceBetween]: justifyContent === `space-between`,
    [styles.justifyContentSpaceAround]: justifyContent === `space-around`,
    [styles.justifyContentSpaceEvenly]: justifyContent === `space-evenly`,
    [styles.alignItemsCenter]: alignItems === `center`,
    [styles.alignItemsFlexStart]: alignItems === `flex-start`,
    [styles.alignItemsFlexEnd]: alignItems === `flex-end`,
    [styles.alignItemsStretch]: alignItems === `stretch`,
    [styles.alignItemsBaseLine]: alignItems === `baseline`,
    [styles.alignContentFlexStart]: alignContent === `flex-start`,
    [styles.alignContentFlexEnd]: alignContent === `flex-end`,
    [styles.alignContentCenter]: alignContent === `center`,
    [styles.alignContentStretch]: alignContent === `stretch`,
    [styles.alignContentSpaceBetween]: alignContent === `space-between`,
    [styles.alignContentSpaceAround]: alignContent === `space-around`,
  });

  return (
    <Base className={classNames} as={as}>
      {children}
    </Base>
  );
};

export default Flex;
