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

    return (
        <nav className={style.navigation} style={{
            marginTop: docked ? 40 : 0
        }}>
            <a href="#soutez">O soutěži</a>
            <a href="#kategorie">Kategorie</a>
            <a href="#prihlaska">Přihláška</a>
            <a href="#projekce">Projekce</a>
            <a href="#workshop">Workshop</a>
            <a href="#vyhodnoceni">Vyhodnocení</a>
            <a href="#partneri">Partneři</a>
            <a href="#kontakty">Kontakty</a>
        </nav>
    )
}

export default Navigation