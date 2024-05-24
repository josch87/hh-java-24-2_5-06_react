import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import BlogPost from "../blogpost/BlogPost.tsx";
import Main from "../main/Main.tsx";
import {blogPosts} from "./data.tsx";

export default function Blog() {
    return (
        <>
            <Header>
                <h1>React</h1>
            </Header>
            <Main>
                <h2>Blog Content</h2>
                {blogPosts.map((post) => {
                return <BlogPost blogPost={post}/>
                })}
            </Main>
            <Footer/>
        </>
    )
}