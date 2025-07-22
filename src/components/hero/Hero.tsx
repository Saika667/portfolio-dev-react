/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useRef } from "react";
import { HeroContent, HeroSection, HeroTitle } from "./HeroStyle";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { getRandomNumber } from "../../utils/numbers";
import Saika from "../../assets/saika.svg?react";
import Test from "../../assets/test.svg?react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useAppDispatch } from "../../app/hooks";
import { setHeroAnimationComplete, setNavVisible } from "../../feature/animationSlice";

function Hero() {
    const dispatch = useAppDispatch();
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLHeadingElement>(null)

    // Fonction pour préparer un élément texte pour l'animation lettre par lettre
    const prepareTextAnimation = (element: HTMLElement) => {
        const originalText = element.textContent || ""
        const chars = originalText.split("")
        
        element.innerHTML = chars.map((char, index) => 
            char === " " ? " " : `<span class="letter" data-index="${index}" style="opacity: 0; display: inline-block;">${char}</span>`
        ).join("")
        
        return element.querySelectorAll('.letter')
    }

    // Fonction pour animer un texte lettre par lettre avec stagger configurable
    const animateTextLetters = (letters: NodeListOf<Element>, timeline: gsap.core.Timeline, delay: string = "+=0", stagger: number = 0.1) => {
        return timeline.fromTo(letters, {
            opacity: 0,
            y: 20,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.1,
            ease: "back.out(1.7)",
            stagger: stagger
        }, delay)
    }

    // Fonction pour animer le SVG
    const animateSVG = (paths: NodeListOf<Element>, timeline: gsap.core.Timeline, delay: string = "+=0") => {
        return timeline
            .fromTo(paths, {
                strokeDashoffset: (_, target) => (target as SVGPathElement).getTotalLength()
            }, {
                strokeDashoffset: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.1
            }, delay)
            .fromTo(paths, {
                fill: "transparent"
            }, {
                fill: "url(#saikaGradient)",
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.05
            }, "-=0.5")
    }

    // Fonction pour configurer les effets hover du SVG
    const setupSVGHoverEffects = () => {
        const paths = document.querySelectorAll('.saika-svg path');
        let resetTimer: number | null = null;
        
        paths.forEach((path, index) => {
            const svgPath = path as SVGPathElement;
            
            // Effet hover : agrandissement et changement de couleur
            svgPath.addEventListener('mouseenter', () => {
                // Annuler le timer de reset s'il existe
                if (resetTimer) {
                    clearTimeout(resetTimer);
                    resetTimer = null;
                }
                
                // Éclaircir la lettre survolée en premier
                gsap.to(svgPath, {
                    fill: "url(#saikaGradientBright)",
                    scale: 1.1,
                    y: -5,
                    duration: 0.2,
                    ease: "power2.out"
                });
                
                // Assombrir les autres lettres avec un délai
                paths.forEach((otherPath, otherIndex) => {
                    if (otherIndex !== index) {
                        gsap.to(otherPath, {
                            fill: "url(#saikaGradientDark)",
                            duration: 0.3,
                            delay: 0.1,
                            ease: "power2.out"
                        });
                    }
                });
            });
            
            // Effet mouseleave : retour à l'état normal avec délai
            svgPath.addEventListener('mouseleave', () => {
                gsap.to(svgPath, {
                    scale: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out"
                });
                
                // Programmer le retour à l'état normal avec un délai
                resetTimer = setTimeout(() => {
                    // Retour à l'état normal pour la lettre survolée
                    gsap.to(svgPath, {
                        fill: "url(#saikaGradient)",
                        duration: 0.2,
                        ease: "power2.out"
                    });
                    
                    // Retour à l'état normal pour les autres lettres
                    paths.forEach((otherPath, otherIndex) => {
                        if (otherIndex !== index) {
                            gsap.to(otherPath, {
                                fill: "url(#saikaGradient)",
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        }
                    });
                }, 300); // Délai de 300ms avant de repasser au noir
            });
            
            // Effet click : animation de rebond
            svgPath.addEventListener('click', () => {
                gsap.to(svgPath, {
                    // scale: 1.2,
                    duration: 0.1,
                    ease: "power2.out",
                    yoyo: true,
                    repeat: 1
                });
            });
        });
    }

    useEffect(() => {
        gsap.registerPlugin(TextPlugin, DrawSVGPlugin)

        const tl = gsap.timeline()
        const title = titleRef.current
        const subtitle = subtitleRef.current
        const saika = document.querySelector(".saika-svg")

        if (!title || !saika || !subtitle) return

        // Préparer les textes
        const titleLetters = prepareTextAnimation(title)
        const subtitleLetters = prepareTextAnimation(subtitle)

        if (!titleLetters.length || !subtitleLetters.length) return

        // Préparer le SVG
        const paths = document.querySelectorAll('.saika-svg path');
        paths.forEach(path => {
            const svgPath = path as SVGPathElement;
            const length = svgPath.getTotalLength();
            svgPath.style.strokeDasharray = length.toString();
            svgPath.style.strokeDashoffset = length.toString();
            svgPath.style.fill = "transparent";
        });
        
        // Timeline complète
        animateTextLetters(titleLetters, tl) // "Bonjour, je suis"
        animateSVG(paths, tl, "-=0.2") // SVG après le titre
        animateTextLetters(subtitleLetters, tl, "-=0.7", 0.05) // Stagger plus rapide
        
        // Quand toutes les animations sont terminées
        tl.call(() => {
            console.log("Hero animation complete");
            dispatch(setHeroAnimationComplete(true));
            dispatch(setNavVisible(true));
            
            // Ajouter les effets hover après l'animation initiale
            setupSVGHoverEffects();
        });
    }, [dispatch])

    return (
        <HeroSection>
            <HeroContent>
                <HeroTitle ref={titleRef}>Bonjour, je suis</HeroTitle>
                <Saika className="saika-svg" />
                <HeroTitle className="hero-subtitle" ref={subtitleRef}>Développeuse Full Stack</HeroTitle>
            </HeroContent>
        </HeroSection>
    )
}

export default Hero;