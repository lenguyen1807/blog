import { cn } from "@/lib/utils";

export interface MdxVideoProps {
  src: string;
  title: string;
  className?: string;
  caption?: string;
}

export default function MdxVideo({
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
      <video
        className='m-0 block aspect-video w-full grow rounded-md p-0'
        preload="auto" 
        controls
        title={title}
      >
        <source src={src} type="video/mp4"/>
      </video>
      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  );
}