import React from 'react'

import style from "../../css/Home.module.css"

const PageHead = () => {

    return (
        <div id={style.pageHead}>
            <div className={style.introduction}>
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
            <img className={style.logo} src="/images/transparent-kratas-logo.gif"/>
            <img className={style.photographer} src="/images/photographer.png"/>
        </div>
    )
}

export default PageHead