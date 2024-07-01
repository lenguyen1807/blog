import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { ARTICLE_PATH } from "@/lib/const"
import { IArticle } from "./interface";

export async function GetAllArticles() {
    const articlePath = path.resolve(process.cwd(), ARTICLE_PATH);
    const articles = await fs.readdir(articlePath);

    return Promise.all(
        articles
        .filter((article) => path.extname(article) === ".mdx")
        .map(async (article) => {
            const filePath = `${articlePath}/${article}`
            const fileName = article.split(".")[0];
            const fileContent = await fs.readFile(filePath, "utf8");
            const { data, content } = matter(fileContent);
            return {...data, body: content, name: fileName} as IArticle;
        })
    )
}

export async function GetArticleByName(name: string) {
    const articles = await GetAllArticles();
    return articles.find((article) => article.name === name)
}