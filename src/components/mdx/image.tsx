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
        className="transition rounded-md"
        src={src}
        alt={alt}
        height={height}
        width={width}
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