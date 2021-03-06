import React, {useState, useEffect} from 'react'

import Image from 'next/image';

import style from "../styles/Home.module.css"

const PageHead = () => {
    const [intro, setIntro] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIntro(false), 1500);
        return (() => clearTimeout(timeout));
    })
    
    return (
        <div id={style.pageHead}>
            {intro && (
                <div  id={style.presenting}>
                    <Image src="/images/delta_presents.svg" alt="Delta - střední škola informatiky a ekonomie" layout="fill"/>
                </div>
            )}
            <div className={style.introduction + (intro ? ` ${style.hidden}` : "")}>
                <h1>Pardubický kraťas</h1>
                <div className={style.infoShow}>
                    <div className={style.infoBlock}>
                        <div><strong>Co?</strong></div>
                        <div>Studentská filmová soutěž,<br/>aneb &quot;<strong>Filmová veselka na Deltě</strong>&quot;</div>
                    </div>
                    <div className={style.infoBlock}>
                        <div><strong>Kdy?</strong></div>
                        <div><strong>7. dubna 2022</strong></div>
                    </div>
                    <div className={style.infoBlock}>
                        <div><strong>Kde?</strong></div>
                        <div><strong>Pardubice, DELTA - Střední škola informatiky</strong></div>
                    </div>
                </div>
            </div>
            <div className={style.logo + (intro ? ` ${style.hidden}` : "")}>
                <Image src="/images/transparent-kratas-logo.gif" alt="Pardubický kraťas" layout="fill" objectFit='contain'/>
            </div>
            <div className={style.photographer}>
                <Image src="/images/photographer.png" alt="Fotograf" objectFit='contain' objectPosition='bottom right' width="1500" height="1500"/>
            </div>
        </div>
    )
}

export default PageHead