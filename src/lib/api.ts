import fs from "fs/promises";
import matter from "gray-matter";
import { IArticle } from "./interface";
import { globby } from "globby";
import { remark } from "remark";
import { headingTree } from "@/lib/other/tree";
import path from "path";

export async function GetAllMdx(path: string) {
    /* read all files have .mdx extension */
    const articles = await globby(path);

    return Promise.all(
        articles.map(async (file) => {
            const fileName = file.split("/").at(-1)?.split(".")[0];
            const fileContent = await fs.readFile(file, "utf8");

            // get file title, created_date, etc and file content
            const {data, content} = matter(fileContent);

            // get table of content
            const toc = await remark()
                        .use(headingTree)
                        .process(content)
                        .then((data) => data.headings);
            return {...data, body: content, name: fileName, toc: toc} as IArticle;
        })
    )
}

/* Projects */

function ProjectsPath(mdxpath: string) { 
    const articlePath = "src/contents/projects/"
    if (process.env.NODE_ENV === "production") {
        return `${path.resolve(process.cwd(), articlePath)}/${mdxpath}`;
    }
    return `${articlePath}/${mdxpath}`;
}

export async function GetAllProjects() {
    return GetAllMdx(ProjectsPath("**/*.mdx"));
}

export async function GetProjectByName(name: string) {
    const projects = await GetAllProjects();
    return projects.find((project) => project.name === name)
}

/* Articles */

function ArticlePath(mdxpath: string) { 
    const articlePath = "src/contents/articles/"
    if (process.env.NODE_ENV === "production") {
        return `${path.resolve(process.cwd(), articlePath)}/${mdxpath}`;
    }
    return `${articlePath}/${mdxpath}`;
}

export async function GetAllArticles() {
    return GetAllMdx(ArticlePath("**/*.mdx"));
}

export function GetAllArticlesSort(articles: IArticle[]) {
    return articles.sort(
        (a,b) => {
            const a_date = a.update_date ? a.update_date : a.create_date;
            const b_date = b.update_date ? b.update_date : b.create_date;
            return (new Date(b_date)).getTime() - (new Date(a_date)).getTime();
        }
    );
}

export async function GetArticleByName(name: string) {
    const articles = await GetAllArticles();
    return articles.find((article) => article.name === name)
}

export async function GetArticleByTag(tag: string) {
    const articles = await GetAllArticles();
    return articles.filter((article) => {
        if (article.tags) {
            return article.tags.find(value => value === tag)
        }
    })
}

export function GetAllUniqueTags(articles: IArticle[]) {
    const tags = articles.flatMap((article) => {
        if (article.tags) {
            return [...article.tags];
        }
    })
    return Array.from(new Set(tags))
                .filter(item => item != undefined);
}