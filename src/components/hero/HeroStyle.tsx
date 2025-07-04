import styled from "styled-components";

export const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
            radial-gradient(circle at 30% 70%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    }
`

export const HeroContent = styled.div`
    .saika-svg {
        width: 70vw;
        height: auto;
        max-width: 100%;

        & path:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
            transition: left 0.5s ease;
        }

        & path:hover:before {
            left: 100%;
        }
    }
`

export const SaikaSVG = styled.div`
    .saika-svg {
        opacity: 0;
        visibility: hidden;
        fill: none;
    }
`

export const HeroTitle = styled.p`
    font-size: 48px;
    font-weight: 600;

    &.hero-subtitle {
        text-align: right;
    }
`