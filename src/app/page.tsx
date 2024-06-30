import ProfileGif from "@/components/profile-gif";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-y-10">
      <section className="flex flex-col items-center gap-y-7">
        <ProfileGif />
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-3xl font-bold">Le Nguyen</h1>
        </div>
      </section>
      <section className="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
        <div className="text-xl md:w-1/3">
            <h2>About me</h2>
        </div>
        <div className="flex flex-col gap-y-3 md:w-2/3">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque quia omnis
              consectetur, voluptas praesentium veniam blanditiis ratione asperiores accusantium laborum
              odit commodi quis deserunt incidunt et dolor iure ut! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Alias quia, doloribus ut beatae perspiciatis voluptatibus.
            </p>
        </div>
      </section>
    </div>
  );
}