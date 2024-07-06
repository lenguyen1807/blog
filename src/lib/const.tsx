export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? "http://localhost:3000"
    : "https://le-nguyen-blog.vercel.app";

export function AboutMe() {
    return (
        <div>
            {"Hello my name is "}
            <span className="text-pink-400">
                {"Le Nguyen. "}
            </span>
            {"I'm currently a senior student at University of Science - VNU HCMC, majoring in Artificial Intelligence. "}
            {"I'm passionate about AI and Mathematics as well. "}
            {"This blog is created to share what I've learnt. "}
            {"Also, you can check my "}
            <a href="https://my-digital-garden-one-sigma.vercel.app/" className="hover:underline text-muted-foreground">
                {"note page "}
            </a>
            {"to see more detailed notes (though currently, it's only available in Vietnamese)."}
        </div>
    )
}