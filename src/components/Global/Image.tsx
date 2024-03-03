interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  [key: string]: any;
}

export default function Image(props: ImageProps) {
  const { src, alt, height, width, className, ...otherProps } = props;

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
}
