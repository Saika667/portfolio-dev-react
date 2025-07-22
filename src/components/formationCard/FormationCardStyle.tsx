import styled from "styled-components";

export const CardContainer = styled.section`
    background: linear-gradient(45deg, 
        rgba(30, 32, 48, 0.9) 0%, 
        rgba(102, 126, 234, 0.1) 50%, 
        rgba(118, 75, 162, 0.1) 100%
    );
    border-radius: 1rem;
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    display: flex ;
    padding: 1.5rem;
    max-width: 650px;
`

export const ImageContainer = styled.div`
    width: 30%;
`

export const InformationContainer = styled.div`
    width: 70%;
`

export const FormationName = styled.h2`
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 1.5rem;
`

export const Year = styled.span`
    font-size: 1.5rem;
    font-weight: 800;
`

export const SchoolName = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
`

