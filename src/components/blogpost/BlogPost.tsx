import {blogPost} from "../blog/data.tsx";
import "./BlogPost.css"

type Props = {
    blogPost: blogPost
}

export default function BlogPost({blogPost}: Props) {
    return (
        <article>
            <h3>
                {blogPost.title}
            </h3>
            <p className="blogpost__author">by {blogPost.author}</p>
            <div className="blogpost__preview-container">
                <div className="blogpost__image">
                    {blogPost.image ?
                        <img src={blogPost.image} alt={blogPost.title} width={400}/> :
                        <img src="/src/assets/no-image.png" alt="No image available" width={400}/> }
                </div>
                <div className="blogpost__summary">
                    <p>{blogPost.summary}</p>
                    <p>
                        <a href={blogPost.url}>Read more</a>
                    </p>
                </div>
            </div>
        </article>
    )
}