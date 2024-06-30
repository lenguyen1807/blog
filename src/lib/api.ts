import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export async function GetPosts(dirPath: string) {
    const postPath = path.resolve(process.cwd(), dirPath);
    const posts = await fs.readdir(postPath);

    return Promise.all(
        posts 
        .filter((file) => path.extname(file) === ".mdx")
        .map(async (file) => {
            const filePath = `${postPath}/${file}`
            const fileName = file.split(".")[0];
            const fileContent = await fs.readFile(filePath, "utf8");
            const { data, content } = matter(fileContent);

            return {...data, body: content, name: fileName};
        })
    )
}