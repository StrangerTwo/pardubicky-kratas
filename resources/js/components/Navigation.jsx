import React, {useState, useEffect} from 'react'

import style from "../../css/Home.module.css"

const Navigation = () => {
    const [docked, setDocked] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());
        return () => {
            window.removeEventListener('scroll', () => handleScroll());
        }
    }, [])

    const handleScroll = () => {
        setDocked(window.scrollY == 0)
    }

    const scrollTo = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return;
        window.scrollTo({top: element.getBoundingClientRect().y + window.scrollY - 30, behavior: 'smooth'})
    }

    return (
        <nav className={style.navigation + (docked ? (" " + style.docked) : "")}>
            <span onClick={() => scrollTo("#soutez")}>O soutěži</span>
            <span onClick={() => scrollTo("#kategorie")}>Kategorie</span>
            <span onClick={() => scrollTo("#prihlaska")}>Přihláška</span>
            <span onClick={() => scrollTo("#projekce")}>Projekce</span>
            <span onClick={() => scrollTo("#workshop")}>Workshop</span>
            <span onClick={() => scrollTo("#vyhodnoceni")}>Vyhodnocení</span>
            <span onClick={() => scrollTo("#partneri")}>Partneři</span>
            <span onClick={() => scrollTo("#kontakty")}>Kontakty</span>
        </nav>
    )
}

export default Navigation