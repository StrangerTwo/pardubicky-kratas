import React, {useState} from 'react';

import style from "../../css/Home.module.css"

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
        <ul className={style.categories}>
            <Category title="Krátký film na regionální téma města Pardubice a Pardubického kraje">
                Text o XXXX
            </Category>
            <Category title="Krátký hraný film">
                Text o XXXX
            </Category>
            <Category title="Animovaný film">
                Text o XXXX
            </Category>
            <Category title="Videoklip a YouTube videoprezentace">
                Text o XXXX
            </Category>
            <Category title="Juniorské filmové okénko">
                Text o XXXX
            </Category>
            <Category title="Snímky studentů filmových škol do 21 let">
                Text o XXXX
            </Category>
        </ul>
    )
}

export default Categories