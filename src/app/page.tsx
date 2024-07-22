import ResumeCard from "@/components/misc/resume-card";
import TextSection from "@/components/misc/text-section";
import { 
  AboutMe, 
  Icon,
} from "@/lib/const";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-y-10">
      <section className="flex flex-col items-center gap-y-7">
        <Image
            src="https://avatars.githubusercontent.com/u/91407657"
            alt="Profile photo"
            style={{ width: "auto", height: "150px" }}
            sizes="100vw"
            width={0}
            height={0}
            className="rounded-none"
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
      <TextSection title="Programming Language">
        <div className="flex gap-x-10 items-center">
          <Icon name="Cpp" content="This is the first language I learnt. I really want to master it but you know, it is hard 💀. Also it is the first choice when it comes to writing something from scratch (which I love to do 🍉). I don't know C and I think C is completely different than C++, so yeah, if you tell me to write C, I would kill myself." />
          <Icon name="Python" content="I love how easy it is (not that easy, it is only easy when compare to C++). In AI, this is the first class language, a lot of supports and users, so why don't use this 🤷‍♂️." />
          <Icon name="Typescript" content="Fun fact: I don't know Javascript and Typescript is the first web language I used. And I love it but sometimes I have to wonder if I can punch myself in the face when type errors came up." />
        </div>
      </TextSection>
      <TextSection title="Tools">
        <div className="flex gap-x-10 items-center">
          <Icon name="Pytorch" content="Just don't use Tensorflow bro, Pytorch is and always has been the first class framework for deep learning." />
          <Icon name="Docker" content="Still finding some use cases for this 🕵️." />
          <Icon name="Next" content="The first framework I used and this took my hand to the world of Web. Use this for my blog (this blog) too." />
        </div>
      </TextSection>
    </div>
  );
}