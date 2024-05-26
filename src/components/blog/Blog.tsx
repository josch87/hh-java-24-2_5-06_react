import "./Blog.css"
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import BlogPost from "../blogpost/BlogPost.tsx";
import Main from "../main/Main.tsx";
import {blogPosts} from "./data.tsx";
import {UserCardImage} from "../UserCardImage/UserCardImage.tsx";

export default function Blog() {
    return (
        <>
            <Header>
                <a className="blog__title" href="/">
                    <h1>React</h1>
                </a>
            </Header>
            <Main>
                <div className="blog__blog-area">
                    <h2>Blog Content</h2>
                    <div className="blog__posts">
                        {blogPosts.map((post) => {
                            return <BlogPost blogPost={post} key={post.id}/>
                        })}
                    </div>
                </div>
                <div className="blog__profile-area">
                    <h2>About me</h2>
                    <UserCardImage/>
                </div>
            </Main>
            <Footer/>
        </>
    )
}