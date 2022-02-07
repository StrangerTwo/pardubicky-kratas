import React from 'react'

import style from "../../css/Home.module.css"

const PageHead = () => {

    return (
        <div id={style.pageHead}>
            <div className={style.introduction}>
                <h1>Pardubický kraťas</h1>
                <ul>
                    <li>7. DUBNA 2022</li>
                    <li>Studentská filmová soutěž, aka "Filmová veselka na Deltě"</li>
                </ul>
            </div>
            <img className={style.logo} src="/images/transparent-kratas-logo.gif"/>
            <img className={style.photographer} src="/images/photographer.jpg"/>
        </div>
    )
}

export default PageHead