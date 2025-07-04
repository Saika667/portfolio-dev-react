import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
    width: 80vw;
    max-width: 1200px;
    position: fixed;
    left: 0;
    right: 0;
    top: 2rem;
    margin: 0 auto;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .7rem 2.5rem;
    background: linear-gradient(45deg, 
        rgba(30, 32, 48, 0.9) 0%, 
        rgba(102, 126, 234, 0.1) 50%, 
        rgba(118, 75, 162, 0.1) 100%
    );
    backdrop-filter: blur(16px) saturate(180%);
    border-radius: 2.5rem;
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 2.5rem;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0.4rem 1.2rem;
    border-radius: 1.2rem;
    transition: all 0.3s ease;
    position: relative;
    border: 1px solid transparent;
    
    &:hover, &:focus {
        background: linear-gradient(45deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
        border-color: rgba(102, 126, 234, 0.3);
        color: #fff;
        box-shadow: 0 4px 20px 0 rgba(102, 126, 234, 0.2);
        transform: translateY(-2px);
        outline: none;
    }
`;