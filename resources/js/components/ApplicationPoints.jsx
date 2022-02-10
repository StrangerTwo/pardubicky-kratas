import React from 'react'

import style from "../../css/Home.module.css"

const ApplicationPoints = () => {

    return (
        <ol className={style.applicationPoints}>
            <li>
                <span>Vyplň přihlášku</span>
                <p>Stáhni a následně <i>vyplň přihlášku</i></p>
            </li>
            <li>
                <span>Pošli své dílo</span>
                <p>Datové soubory společně s elektronickou verzí přihlášky filmu zasílej prostřednictvím datové služby (např. přes www.uschovna.cz) na e-mail <b>info@pardubickykratas.cz</b></p>
            </li>
        </ol>
    )
}

export default ApplicationPoints