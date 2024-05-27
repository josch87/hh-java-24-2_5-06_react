import "./Blog.css"
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import BlogPost from "../blogpost/BlogPost.tsx";
import Main from "../main/Main.tsx";
import {blogPosts} from "../../data/postData.tsx";
import {UserCardImage} from "../UserCardImage/UserCardImage.tsx";
import BlogSection from "../blogsection/BlogSection.tsx";
import {aljoscha} from "../../data/authorData.ts";



export default function Blog() {
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
                    <h2>About me</h2>
                    <div className="blog__user-card">
                        <UserCardImage user={aljoscha}/>
                    </div>
                </BlogSection>
            </Main>
            <Footer/>
        </>
    )
}