export type BlogPostType = {
    id: number,
    title: string,
    author: {name: string, url: string},
    summary: string,
    image?: string,
    url: string,
};

export type BlogPostsType = BlogPostType[];

export type UserType = {
    name: string,
    position: string,
    avatar: string,
    backgroundImage: string,
    button: {
        text: string,
        url: string,
    },
    stats: {value: string, label: string} [],
}