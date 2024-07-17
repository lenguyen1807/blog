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
            >
            <ul className="list-disc text-muted-foreground ml-6">
                <li>Team size: 6.</li>
                <li>I were lead front-end and project manager.</li>
                <li>My team chose to use NextJS for frontend, FastAPI for backend, MongoDB and Firebase for Database.</li>
                <li>We also have RAG chatbot (using Langchain) and Recommendation System for Books.</li>
                <li>Some notable features: Role-based Authencitation, user can review book, has admin dashboard to manage user, book. Also has dashboard for library side, so they can add, modify or delete a book.</li>
                <li>Data are crawled from Goodreads.</li>
                <li>You can find all source code by clicking on the title.</li>
            </ul>
            </ProjectCard>
            <ProjectCard 
                heading="Road Image Segmentation"
                subheading="Project for CSC16004 - Computer Vision Course. Using Pytorch."
                date="2024"
                imgPath="/homepage/attentionUnet.png"
                href="https://github.com/lenguyen1807/HCMUS-CSC16004-Computer-Vision/tree/main/Project"
            />
        </div>
    )
}