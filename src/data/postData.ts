import {BlogPostsType, BlogPostType} from "../model/model.ts";

const post1: BlogPostType = {
    id: 1,
    title: "React with Spring Boot",
    author: {
        name: "Florian Weber",
        url: "/author/florian-weber",},
    summary: "\"React with Spring Boot\" explains how to integrate React and Spring Boot to create modern full-stack web applications. React is used for developing dynamic user interfaces, while Spring Boot provides robust backend APIs. The content covers configuring both frameworks, enabling communication between frontend and backend, and best practices for efficient development and maintenance.",
    image: "src/assets/spring-boot-and-react-js.png",
    url: "/blog/react-with-spring-boot"
}
const post2: BlogPostType = {
    id: 2,
    title: "React vs. Angular",
    author: {
        name: "Mickey Mouse",
        url: "/author/mickey-mouse",
    },
    summary: "\"React vs. Angular\" explains the differences between React and Angular for building web applications. React, a library by Facebook, offers flexibility and a component-based architecture, while Angular, a framework by Google, provides a comprehensive solution with built-in tools and strong typing. The comparison covers performance, learning curve, community support, and use cases to help developers choose the right tool for their projects.",
    url: "/blog/react-vs-angular"
}
export const blogPosts: BlogPostsType = [post1, post2];

