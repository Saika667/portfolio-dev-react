import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../store';
import GlobalStyle from '../utils/GlobalStyle';
import Nav from './nav/Nav';
import styled from 'styled-components';

const AppWrapper = styled.div`
    position: relative;
    min-height: 100vh;
`;

interface AppProps {
    children: React.ReactNode;
}

function App({ children }: AppProps) {
    return (
        <Provider store={store}>
            <AppWrapper>
                <Nav />
                <GlobalStyle />
                {children}
            </AppWrapper>
        </Provider>
    )
}

export default App
