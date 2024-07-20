import ProjectCard from "@/components/misc/project-card"

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-y-10">
            <ProjectCard 
                heading="Bobo Library"
                subheading="Project for CSC10011 - Software Engineering for AI Course"
                date="2024"
                imgPath="/homepage/bobo-homepage.png"
                href="/projects/bobo-library"
            />
            <ProjectCard 
                heading="Road Image Segmentation"
                subheading="Project for CSC16004 - Computer Vision Course. Using Pytorch."
                date="2024"
                imgPath="/homepage/attentionUnet.png"
                href="/projects/road-image"
            />
        </div>
    )
}