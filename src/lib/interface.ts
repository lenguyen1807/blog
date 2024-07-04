export interface IArticle {
    title: string,
    create_date: string,
    update_date: string,
    description: string,
    thumbnail?: string,
    tags: string[],
    body: string,
    name: string
}