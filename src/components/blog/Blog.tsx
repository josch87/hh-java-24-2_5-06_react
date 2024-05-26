import "./Blog.css"
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import BlogPost from "../blogpost/BlogPost.tsx";
import Main from "../main/Main.tsx";
import {blogPosts} from "./data.tsx";
import {UserCardImage} from "../UserCardImage/UserCardImage.tsx";
import BlogSection from "../blogsection/BlogSection.tsx";

const user = {
    name: "Aljoscha Zöller",
    position: "Fullstack engineer",
    avatar: "https://2.gravatar.com/avatar/8f6213720804d3379713f4219fb81335db5f0212ad551517a18d5d537c741406?size=128",
    backgroundImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    button: {
        text: "Website",
        url: "https://aljoschazoeller.com"
    },
    stats: [
        {value: '34K', label: 'Followers'},
        {value: '187', label: 'Follows'},
        {value: '1.6K', label: 'Posts'},
    ]
}

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
                        <UserCardImage user={user}/>
                    </div>
                </BlogSection>
            </Main>
            <Footer/>
        </>
    )
}