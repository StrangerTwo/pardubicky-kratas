import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'

import style from "../styles/Home.module.css"

const Navigation = () => {
    const [docked, setDocked] = useState(true);
    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());
        return () => {
            window.removeEventListener('scroll', () => handleScroll());
        }
    }, [])

    const handleScroll = () => {
        setDocked(window.scrollY != 0)
    }

    const scrollTo = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return;
        window.scrollTo({top: element.getBoundingClientRect().y + window.scrollY - navRef.current.clientHeight, behavior: 'smooth'})
    }

    return (
        <nav ref={navRef} className={style.navigation + (docked ? (" " + style.docked) : "")}>
            <span onClick={() => scrollTo("#soutez")}>O soutěži</span>
            <span onClick={() => scrollTo("#kategorie")}>Kategorie</span>
            <span onClick={() => scrollTo("#prihlaska")}>Přihláška</span>
            <span onClick={() => scrollTo("#projekce")}>Projekce</span>
            <span><Link href="/workshop" passHref><a>Workshop</a></Link></span>
            <span><Link href="/vyhodnoceni" passHref><a>Vyhodnocení</a></Link></span>
            <span onClick={() => scrollTo("#partneri")}>Partneři</span>
            <span onClick={() => scrollTo("#kontakty")}>Kontakty</span>
        </nav>
    )
}

export default Navigation