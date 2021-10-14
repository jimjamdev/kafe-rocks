import * as React from "react";
import clsx from "clsx";
import Base, { IBase } from "@components/atoms/base";
import * as styles from "./image.module.scss";

interface IImage extends IBase {
  size?: "small" | "medium" | "large";
  color?: "light" | "dark" | "medium";
  alt?: string;
  title?: string;
  OnClick?: any;
}

const Image: React.FunctionComponent<IImage> = ({
  responsive,
  className,
  alt,
  title,
  width,
  height,
  rounded,
  src,
  onClick,
}) => {
  const classNames = clsx(styles.root, {
    [styles.responsive]: responsive,
    [styles.rounded]: rounded,
  });

  return (
    <Base
      as="img"
      width={width}
      height={height}
      alt={alt}
      title={alt || title}
      src={src}
      className={`${classNames} ${className}`}
      onClick={onClick}
    />
  );
};

export default Image;
