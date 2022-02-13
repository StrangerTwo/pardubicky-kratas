import React, {useState, useEffect} from 'react'

import style from "../../css/Home.module.css"

const PageHead = () => {
    const [intro, setIntro] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIntro(false), 5000);
        return (() => clearTimeout(timeout));
    })
    
    return (
        <div id={style.pageHead}>
            {intro && (
                <img id={style.presenting} src="/images/delta.svg" alt="Delta - střední škola informatiky a ekonomie"/>
            )}
            <div className={style.introduction + (intro ? ` ${style.hidden}` : "")}>
                <h1>Pardubický kraťas</h1>
                <div className={style.infoShow}>
                    <div className={style.infoBlock}>
                        <div><b>Co?</b></div>
                        <div>Studentská filmová soutěž,<br/>aneb "<b>Filmová veselka na Deltě</b>"</div>
                    </div>
                    <div className={style.infoBlock}>
                        <div><b>Kdy?</b></div>
                        <div><b>7.4.2022</b></div>
                    </div>
                    <div className={style.infoBlock}>
                        <div><b>Kde?</b></div>
                        <div><b>Pardubice, DELTA - Střední škola informatiky</b></div>
                    </div>
                </div>
            </div>
            <img className={style.logo + (intro ? ` ${style.hidden}` : "")} src="/images/transparent-kratas-logo.gif"/>
            <img className={style.photographer} src="/images/photographer.png"/>
        </div>
    )
}

export default PageHead