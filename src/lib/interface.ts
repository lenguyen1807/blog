export interface IToc {
    value: string,
    depth: number,
    data: any,
    children: IToc[]
}

export interface IArticle {
    title: string,
    create_date: string,
    update_date?: string,
    description: string,
    thumbnail?: string,
    draft?: boolean,
    tags: string[],
    body: string,
    name: string
    toc: IToc[]
}