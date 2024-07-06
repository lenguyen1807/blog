import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string,
    subheading?: string,
    date?: string,
    imgPath?: string,
    height?: string,
    href?: string,
}


export default function ProjectCard({
    heading,
    subheading,
    date,
    imgPath,
    height,
    href,
    children
} : ProjectCardProps) {
    if (href) {
        return (
            <Card className="flex flex-col rounded-2xl border border-border shadow-sm transition-all hover:border-foreground/50 hover:shadow-md">
                {imgPath && 
                    <Image
                        src={imgPath}
                        alt="resume-image"
                        sizes="100vw"
                        width={0}
                        height={0}
                        className={cn("w-full rounded-2xl rounded-bl-none rounded-br-none", height)}
                    />
                }
                <Link href={href}>
                    <CardHeader>
                        <CardTitle className="text-lg">{heading}</CardTitle>
                        {subheading && <CardDescription className="text-sm">{subheading}</CardDescription>}
                        {date && <CardDescription className="text-sm">{date}</CardDescription>}
                    </CardHeader>
                </Link>
                {children && 
                <CardContent>
                    {children}
                </CardContent>}
            </Card>
        )
    }

    return (
        <Card className="flex flex-col rounded-2xl border border-border shadow-sm transition-all hover:border-foreground/50 hover:shadow-md">
            {imgPath && 
                <Image
                    src={imgPath}
                    alt="resume-image"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className={cn("w-full rounded-2xl rounded-bl-none rounded-br-none", height)}
                />
            }
            <CardHeader>
                <CardTitle className="text-lg">{heading}</CardTitle>
                {subheading && <CardDescription className="text-sm">{subheading}</CardDescription>}
                {date && <CardDescription className="text-sm">{date}</CardDescription>}
            </CardHeader>
            {children && 
            <CardContent>
                {children}
            </CardContent>}
        </Card>
    )
}