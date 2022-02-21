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
                        <a><i>Stažení a vyplnění přihlášky</i></a>
                    </Link>
                </p>
            </li>
            <li>
                <span>Nahraj své dílo na úschovnu</span>
                <p>Datové soubory filmu nahraj na internet (např. na <a href="https://www.uschovna.cz/">www.uschovna.cz</a>)</p>
            </li>
            <li>
                <span>Pošli přihlášku emailem</span>
                <p>Elektronickou verzi přihlášky zašli na e-mail <Link href="mailto:info@pardubickykratas.cz" passHref>
                        <a>
                            <strong>info@pardubickykratas.cz</strong>
                        </a>
                    </Link>
                </p>
            </li>
        </ol>
    )
}

export default ApplicationPoints