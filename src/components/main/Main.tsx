import "./Main.css"
import React from "react";

type Props = {
    children: React.ReactNode
};

export default function Main({children}: Props) {
    return (
        <main className="main">
            {children}
        </main>
    )
}