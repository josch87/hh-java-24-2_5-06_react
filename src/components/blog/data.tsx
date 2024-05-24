export type blogPost = {
    title: string,
    summary: string,
    image?: string
};
export type blogPosts = blogPost[];

const post1: blogPost = {
    title: "React with Spring Boot",
    summary: "\"React with Spring Boot\" explains how to integrate React and Spring Boot to create modern full-stack web applications. React is used for developing dynamic user interfaces, while Spring Boot provides robust backend APIs. The content covers configuring both frameworks, enabling communication between frontend and backend, and best practices for efficient development and maintenance.",
    image: ""
}
const post2: blogPost = {
    title: "React vs. Angular",
    summary: "\"React vs. Angular\" explains the differences between React and Angular for building web applications. React, a library by Facebook, offers flexibility and a component-based architecture, while Angular, a framework by Google, provides a comprehensive solution with built-in tools and strong typing. The comparison covers performance, learning curve, community support, and use cases to help developers choose the right tool for their projects.",
}
export const blogPosts: blogPosts = [post1, post2];