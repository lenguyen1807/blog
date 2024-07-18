import ResumeCard from "@/components/misc/resume-card";
import TextSection from "@/components/misc/text-section";
import { AboutMe } from "@/lib/const";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-y-10">
      <section className="flex flex-col items-center gap-y-7">
        <Image
            src="https://avatars.githubusercontent.com/u/91407657?s=400&u=867ee350e32508c57cc667070adb154ca1e01955&v=4"
            alt="Profile photo"
            style={{ width: "auto", height: "150px" }}
            sizes="100vw"
            width={0}
            height={0}
            className="rounded-full"
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
          height="86px"
        />
      </TextSection>
    </div>
  );
}