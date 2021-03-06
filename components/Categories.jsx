import React, {useState} from 'react';

import Link from 'next/link'

import style from "../styles/Home.module.css"

const Category = ({title, children}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(prev => !prev);
    }

    return (
        <li className={open ? style.open : ''} onClick={toggleOpen}>
            <div className={style.categoryTitle}>{title}</div>
            <div className={style.categoryContent}>
                {children}
            </div>
        </li>
    )
}

const Categories = () => {

    return (
        <div className={style.categories}>
            <ul>
                <li>Krátký film na regionální téma města Pardubice a Pardubického kraje</li>
                <li>Krátký hraný film</li>
                <li>Animovaný film</li>
                <li>Videoklip a YouTube videoprezentace</li>
                <li>Juniorské filmové okénko (pro žáky 2. stupně ZŠ)</li>
                <li>Snímky studentů filmových škol do 21 let</li>
            </ul>
            <Link href="/kratas_propozice.pdf" passHref>
                <a className={style.propozice}><i>Propozice soutěže</i></a>
            </Link>
        </div>
    )
}

export default Categories