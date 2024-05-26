import {blogPost} from "../blog/data.tsx";
import "./BlogPost.css"

type Props = {
    blogPost: blogPost
}

export default function BlogPost({blogPost}: Props) {
    return (
        <article className="blogpost">
            <a href={blogPost.url}>
                <h3>
                    {blogPost.title}
                </h3>
            </a>
            <p className="blogpost__author">
                by <a href={blogPost.author.url} className="blogpost__author-link">{blogPost.author.name}</a>
            </p>
            <div className="blogpost__preview-container">
                {blogPost.image ?
                    <img className="blogpost__image" src={blogPost.image} alt={blogPost.title}/> :
                    <img className="blogpost__image" src="/src/assets/no-image.png" alt="No image available"
                    />}
                <div className="blogpost__summary-container">
                    <p className="blogpost__summary">{blogPost.summary}
                    </p>
                    <a href={blogPost.url} className="blogpost__read-more-btn">Read more</a>


                </div>
            </div>
        </article>
    )
}