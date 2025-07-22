import { useEffect, useRef } from "react";
import { NavContainer, NavLink } from "./NavStyle";
import { useAppSelector } from "../../app/hooks";
import gsap from "gsap";

function Nav() {
    const navRef = useRef<HTMLElement>(null);
    const navVisible = useAppSelector((state) => state.animation.navVisible);

    useEffect(() => {
        if (navVisible && navRef.current) {
            gsap.fromTo(navRef.current, {
                y: -100,
                opacity: 0
            }, {
                y: 25,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.7)"
            });
        }
    }, [navVisible]);

    if (!navVisible) return null;

    return (
        <NavContainer ref={navRef}>
            <NavLink to="/#projects">Projets</NavLink>
            <NavLink to="/#experiences">Expériences</NavLink>
            <NavLink to="/#formations">Formations</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
        </NavContainer>
    )
}

export default Nav