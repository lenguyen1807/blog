import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface UpdateProps {
    children: React.ReactNode,
    title: string
}

export default function MdxUpdate({children, title} : UpdateProps) {
    return (
        <Accordion type="single" collapsible className="pb-4 w-full">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-5">
                <AccordionTrigger className="py-0">{title}</AccordionTrigger>
                <AccordionContent className="text-base">
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}