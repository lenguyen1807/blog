import ResumeCard from "@/components/misc/resume-card";
import TextSection from "@/components/misc/text-section";
import ProjectCard from "@/components/misc/project-card";
import { AboutMe } from "@/lib/const";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-y-10">
      <section className="flex flex-col items-center gap-y-7">
        <Image
            src="/profile/dog1.gif"
            alt="Profile photo"
            style={{ width: "auto", height: "150px" }}
            sizes="100vw"
            width={0}
            height={0}
            unoptimized
        />
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-3xl font-bold">Le Nguyen 🍉</h1>
        </div>
      </section>
      <TextSection title="About me">
        <AboutMe />
      </TextSection>
      <TextSection title="Education">
        <ResumeCard 
          heading="University of Science - VNU HCMC (BSc)"
          subheading="Major in Artificial Intelligence"
          date="Sep 2021 - Sep 2025"
          imgPath="/homepage/hcmus-logo.webp"
          height="70px"
        />
      </TextSection>
      <TextSection title="Certification">
        <ResumeCard 
          heading="Coursera: Deep Learning Specialization"
          date="Sep 2024"
        />
      </TextSection>
    </div>
  );
}