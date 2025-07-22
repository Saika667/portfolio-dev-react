import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage.tsx'
import { Provider } from 'react-redux'
import { store } from './app/index.ts'
import GlobalStyle from './utils/GlobalStyle.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={ store }>
                <App>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={ <HomePage /> } />
                    </Routes>
                </App>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)
