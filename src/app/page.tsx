import ResumeCard from "@/components/misc/resume-card";
import TextSection from "@/components/misc/text-section";
import { 
  AboutMe, 
  Icon,
} from "@/lib/const";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-y-10">
      {/* <section className="flex flex-col items-center gap-y-7">
        <Image
            src="https://avatars.githubusercontent.com/u/91407657"
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
      </section> */}
      <TextSection title="About me">
        <AboutMe />
      </TextSection>
      <TextSection title="Education">
        <ResumeCard 
          heading="VNUHCM - University of Science (BSc)"
          subheading="Major in Artificial Intelligence"
          date="Sep 2021 - Sep 2025"
          imgPath="/hcmus-logo.webp"
          height="80px"
        />
      </TextSection>
      <TextSection title="Work">
        <ResumeCard 
          heading="Bosch Global Software Technologies Vietnam"
          subheading="AI Engineer Intern"
          date="Aug 2024 - Feb 2025"
          imgPath="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/327162835_472985411715972_8069199891918552396_n.png?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEtJbzOTP_-_LLZ3mkqvvNs6y9iO0fFdjfrL2I7R8V2N5Bs-WLUeIU2D7asZUTcOrfBnbYDR2rBY8MB0wRQmiBD&_nc_ohc=qYl7WkOIICYQ7kNvgFih-NW&_nc_ht=scontent.fvca1-4.fna&oh=00_AYAA7AlbH4bKnYbao80VGk1_co6umd5dLdlUZm0AlkUE0Q&oe=66B21CCE"
          height="80px"
        />
      </TextSection>
      <TextSection title="Programming">
        <div className="flex flex-wrap gap-y-5 gap-x-10 items-center">
          <Icon name="Cpp" content="This is the first language I learnt. I really want to master it but you know, it is hard 💀. Also it is the first choice when it comes to writing something from scratch (which I love to do 🍉). I don't know C and I think C is completely different than C++, so yeah, if you tell me to write C, I would kill myself." />
          <Icon name="Python" content="I love how easy it is (not that easy, it is only easy when compare to C++). In AI, this is the first class language, a lot of supports and users, so why don't use this 🤷‍♂️." />
          <Icon name="Typescript" content="Fun fact: I don't know Javascript and Typescript is the first web language I used. And I love it but sometimes I have to wonder if I can punch myself in the face when type errors came up." />
          <Icon name="Pytorch" content="Just don't use Tensorflow bro, Pytorch is and always has been the first class framework for deep learning." />
          <Icon name="Docker" content="I use this for Anaconda. I don't want something wrong in Conda and breaks my whole system 🥲." />
          <Icon name="Next" content="The first framework I used and this took my hand to the world of Web. Use this for my blog (this blog) too." />
        </div>
      </TextSection>
    </div>
  );
}