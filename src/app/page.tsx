import { TextSection } from "@/components/text-section";
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
      <section className="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div className="text-xl md:w-1/3">
            <h2>About me</h2>
        </div>
        <div className="flex flex-col gap-y-3 md:w-2/3">
          <TextSection>
            <AboutMe />
          </TextSection>
        </div>
      </section>
    </div>
  );
}