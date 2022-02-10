import React from 'react'

import style from "../../css/Home.module.css"

const ApplicationPoints = () => {

    return (
        <ol className={style.applicationPoints}>
            <li>
                <span>Vyplňte přihlášku</span>
                <p>Stáhni a následně <i>vyplň přihlášku</i> - pošli film přes Úschovnu na info@pardubickykratas.cz</p>
            </li>
            <li>
                <span>Zvolte formát</span>
                <p>Akceptované formáty: MPG2, MP4, MOV, AVI, m2t; kodeky: MPEG-2, MPEG-4, H.264, AVCHD. Elektronický soubor musí být označen jménem autora a názvem filmu.</p>
            </li>
            <li>
                <span>Pošlete vaše dílo</span>
                <p>Datové soubory společně s elektronickou verzí přihlášky filmu zasílejte prostřednictvím datové služby (např. přes www.uschovna.cz) na e-mail vsaf@post.cz.</p>
            </li>
        </ol>
    )
}

export default ApplicationPoints