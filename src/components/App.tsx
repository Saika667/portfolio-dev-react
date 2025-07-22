import React from 'react'
import Nav from './nav/Nav';

interface AppProps {
    children: React.ReactNode;
}

function App({ children }: AppProps) {
    return (
        <>
            <Nav />
            { children }
        </>
    )
}

export default App
