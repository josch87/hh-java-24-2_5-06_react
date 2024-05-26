import React from "react";
import "./BlogSection.css"

type Props = {
    children?: React.ReactNode
}

export default function BlogSection({children} : Props) {
    return (
        <section className="blog-section">
            {children}
        </section>
    )
}