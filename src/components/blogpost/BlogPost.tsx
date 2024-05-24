import {blogPost} from "../blog/data.tsx";

type Props = {
    blogPost: blogPost
}

export default function BlogPost({blogPost}: Props) {
    return (
        <article>
            <h3>
                {blogPost.title}
            </h3>
            <div className="blogpost__image">
                {blogPost.image ? <img src="{blogPost.image}" alt={blogPost.title}/> : null}
            </div>
            <div className="blogpost__summary">
                <p>{blogPost.summary}</p>
            </div>
        </article>
    )
}