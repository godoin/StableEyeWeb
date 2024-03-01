import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  height,
  width,
  className,
  ...otherProps
}) => {
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      {...otherProps}
      className={className}
    />
  );
};

export default Image;
