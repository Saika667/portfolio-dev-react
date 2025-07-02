import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                </Routes>
            </App>
        </BrowserRouter>
    </StrictMode>,
)
