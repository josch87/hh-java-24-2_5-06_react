import "./Blog.css"
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import BlogPost from "../blogpost/BlogPost.tsx";
import Main from "../main/Main.tsx";
import {blogPosts} from "../../data/postData.ts";
import {UserCardImage} from "../UserCardImage/UserCardImage.tsx";
import BlogSection from "../blogsection/BlogSection.tsx";
import {authors} from "../../data/authorData.ts";
import {Input} from "@mantine/core";
import {ChangeEvent, useState} from "react";
import {AuthorsType} from "../../model/model.ts";


export default function Blog() {

    const [filteredAuthors, setFilteredAuthors] = useState<AuthorsType>(authors);

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        const input: string = event.target.value
        const newFilteredAuthors = authors
            .filter((author) => author.name.toLowerCase().includes(input.toLowerCase()))
        setFilteredAuthors(newFilteredAuthors);
    }

    return (
        <>
            <Header>
                <a className="blog__title" href="/">
                    <h1>React</h1>
                </a>
            </Header>
            <Main>
                <BlogSection>
                    <h2>Blog Content</h2>
                    <div className="blog__posts">
                        {blogPosts.map((post) => {
                            return <BlogPost blogPost={post} key={post.id}/>
                        })}
                    </div>
                </BlogSection>
                <BlogSection>
                    <h2>Authors</h2>
                    <div className="blog__author-search">
                        <Input placeholder="Search authors" onChange={handleOnChange}/>
                    </div>
                    <div className="blog__user-cards">
                        {filteredAuthors
                            .sort((a, b) => a.sort - b.sort)
                            .map((author) =>
                                <UserCardImage user={author} key={author.id}/>
                            )}
                    </div>
                </BlogSection>
            </Main>
            <Footer/>
        </>
    )
}