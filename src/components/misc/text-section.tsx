interface TextSectionProps {
    title: string,
    children: React.ReactNode
}

export default function TextSection({title, children} : TextSectionProps) {
    return (
      // <section className="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
      //   <div className="text-lg md:w-1/3">
      //       <h2>{title}</h2>
      //   </div>
      //   <div className="flex flex-col gap-y-3 md:w-2/3">
      //       {children}
      //   </div>
      // </section>
      <section className="flex flex-col gap-y-6">
          <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex flex-col gap-y-3">
            {children}
        </div>
      </section>
    )
}