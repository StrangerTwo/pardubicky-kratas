import React from 'react'

import Link from 'next/link'

import style from "../styles/Home.module.css"

const ApplicationPoints = () => {

    return (
        <ol className={style.applicationPoints}>
            <li>
                <span>Vyplň přihlášku</span>
                <p>
                    <Link href="/kratas_prihlaska.pdf" passHref>
                        <i><a>Stažení a vyplnění přihlášky</a></i>
                    </Link>
                </p>
            </li>
            <li>
                <span>Pošli své dílo</span>
                <p>Datové soubory společně s elektronickou verzí přihlášky filmu zasílej prostřednictvím datové služby (např. přes <a href="https://www.uschovna.cz/">www.uschovna.cz</a>) na e-mail <b>info@pardubickykratas.cz</b></p>
            </li>
        </ol>
    )
}

export default ApplicationPoints