import fs from "fs/promises";
import matter from "gray-matter";
import { IArticle } from "./interface";
import { globby } from "globby";
import path from "path";

function ArticlePath(mdxpath: string) { 
    const articlePath = "src/contents"
    if (process.env.NODE_ENV === "production") {
        return `${path.resolve(process.cwd(), articlePath)}/${mdxpath}`;
    }
    return `articlePath/${mdxpath}`;
}

export async function GetAllArticles() {
    const articles = await globby(ArticlePath("**/*.mdx"));

    return Promise.all(
        articles.map(async (file) => {
            const fileName = file.split("/").at(-1)?.split(".")[0];
            const fileContent = await fs.readFile(file, "utf8");
            const {data, content} = matter(fileContent);

            return {...data, body: content, name: fileName} as IArticle;
        })
    )
}

export async function GetAllArticlesSort() {
    const articles = await GetAllArticles();
    return articles.sort(
        (a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export async function GetArticleByName(name: string) {
    const articles = await GetAllArticles();
    return articles.find((article) => article.name === name)
}