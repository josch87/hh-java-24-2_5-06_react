import './App.css'
import Blog from "./components/blog/Blog.tsx";
import '@mantine/core/styles.css';

import {MantineProvider} from '@mantine/core';

function App() {

    return (
        <>
            <MantineProvider>
                <Blog/>
            </MantineProvider>
        </>
    )
}

export default App
