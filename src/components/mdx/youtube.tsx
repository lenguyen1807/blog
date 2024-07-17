// ref: https://github.com/letelete/letelete.github.io/blob/master/src/components/ui/atoms/mdx/mdx-youtube-embed.tsx

import { cn } from "@/lib/utils";
import { MdxVideoProps } from "./video";

export default function MdxYoutube({
  src,
  title,
  className,
  caption
} : MdxVideoProps) {
  return (
    <figure
      className={cn(
        'my-4 flex w-full flex-col items-center justify-center',
        className
      )}
    >
      <iframe
        loading='lazy'
        className='m-0 block aspect-video w-full grow rounded-md p-0'
        src={`https://www.youtube.com/embed/${src}`}
        title={title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      />

      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  );
}