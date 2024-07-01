export function AboutMe() {
    return (
        <div>
            {"Hi my name is "}
            <span className="text-pink-400">
                {"Le Nguyen, "}
            </span>
            {"currently a senior student at University of Science - VNU HCMC, majoring in Artificial Intelligence. "}
            {"I'm passionate about AI Explainability and also a little bit Mathematics. "}
            {"This blog is created to share what I've learnt. "}
            {"Also, you can check my "}
            <a href="https://my-digital-garden-one-sigma.vercel.app/" className="hover:underline text-muted-foreground">
                {"note page "}
            </a>
            {"to see more detail notes (but for now it's only in Vietnamese)."}
        </div>
    )
}