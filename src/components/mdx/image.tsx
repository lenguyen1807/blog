// ref: https://github.com/letelete/letelete.github.io/blob/master/src/components/ui/atoms/mdx/mdx-image.tsx

import ImagePrimitive, { ImageProps as ImagePrimitiveProps } from 'next/image';
import { cn } from "@/lib/utils";

export interface MdxImageProps extends ImagePrimitiveProps {
  caption?: string;
}

export default function MdxImage({
  caption,
  className,
  src,
  alt,
  height,
  width,
  ...rest
}: MdxImageProps) {
  return (
    <figure
      className={cn(
        'my-10 flex flex-col items-center justify-center',
        className
      )}
    >
      <ImagePrimitive
        className={cn("transition rounded-md h-auto", {
          "w-max h-auto": height === undefined && width === undefined
        })}
        src={src}
        alt={alt}
        height={height ? height : 0}
        width={width ? width : 0}
        sizes="100vw"
        loading="lazy"
        {...rest}
      />
      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  );
};