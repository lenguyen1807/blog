import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface ResumeCardProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string,
    subheading?: string,
    date?: string,
    imgPath?: string,
    height?: string,
    href?: string
}

export default function ResumeCard({
    heading,
    subheading,
    date,
    imgPath,
    height,
    href,
    children
} : ResumeCardProps) {
    if (href) {
        return (
            <Link href={href}>
                <Card className="relative rounded-2xl border-border shadow-sm border px-5 py-2 transition-all hover:border-foreground/50 hover:shadow-md">
                    <div className="flex gap-x-6 items-center">
                        {imgPath && 
                            <Image
                                src={imgPath}
                                alt="resume-image"
                                style={{width: "auto", height: `${height ? height : ""}`}}
                                sizes="100vw"
                                width={0}
                                height={0}
                                className="rounded-2xl"
                            />
                        }
                        <CardHeader className="px-0 py-2">
                            <CardTitle className="text-lg">{heading}</CardTitle>
                            {subheading && <CardDescription className="text-sm">{subheading}</CardDescription>}
                            {date && <CardDescription className="text-sm">{date}</CardDescription>}
                        </CardHeader>
                    </div>
                    {children && 
                    <CardContent className="pt-3">
                        {children}
                    </CardContent>}
                </Card>
            </Link>
        )
    }

    return (
        <Card className="relative rounded-2xl border-border shadow-sm border px-5 py-2 transition-all hover:border-foreground/50 hover:shadow-md">
            <div className="flex gap-x-6 items-center">
                {imgPath && 
                    <Image
                        src={imgPath}
                        alt="resume-image"
                        style={{width: "auto", height: `${height ? height : ""}`}}
                        sizes="100vw"
                        width={0}
                        height={0}
                        className="rounded-2xl"
                    />
                }
                <CardHeader className="px-0 py-2">
                    <CardTitle className="text-lg">{heading}</CardTitle>
                    {subheading && <CardDescription className="text-sm">{subheading}</CardDescription>}
                    {date && <CardDescription className="text-sm">{date}</CardDescription>}
                </CardHeader>
            </div>
            {children && 
            <CardContent className="pt-3">
                {children}
            </CardContent>}
        </Card>
    )
}