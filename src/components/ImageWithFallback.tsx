import Image, { ImageProps } from "next/image";
import React from "react";

interface ImageWithFallbackProps extends ImageProps {
  src: string;
  fallbackSrc: string;
}

const ImageWithFallback = ({
  src,
  fallbackSrc,
  ...rest
}: ImageWithFallbackProps) => {
  return (
    <Image
      {...rest}
      src={src}
      onError={(e) => {
        e.currentTarget.srcset = src || fallbackSrc;
      }}
      unoptimized
      onErrorCapture={(e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.srcset = fallbackSrc;
      }}
      objectFit="contain"
      loader={(item) => item.src}
    />
  );
};

export default ImageWithFallback;
