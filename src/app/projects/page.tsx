import ProjectCard from "@/components/misc/project-card"

export default function Page() {
    return (
        <div className="flex flex-col lg:grid w-full lg:grid-cols-2 gap-x-10 gap-y-10">
            <ProjectCard 
                heading="Bobo Library"
                subheading="Project for CSC10011 - Software Engineering for AI Course."
                date="2024"
                href="/projects/bobo-library"
            />
            <ProjectCard 
                heading="Road Image Segmentation"
                subheading="Project for CSC16004 - Computer Vision Course. Using Pytorch."
                date="2024"
                href="/projects/road-image"
            />
            <ProjectCard 
                heading="MNIST Neural Network with C++"
                subheading="My side project. Built from scratch with C++ to understand more about Neural Network."
                date="2024"
                href="/projects/cpp-nn"
            />
        </div>
    )
}