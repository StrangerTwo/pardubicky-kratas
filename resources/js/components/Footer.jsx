import React from 'react'

import style from "../../css/Home.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>
                <div className={style.faq}>
                    <div>
                        <span>Nehledáte ..</span>
                        <ul>
                            <li>Jak se přihlásit ?</li>
                            <li>Kde nás najít ?</li>
                            <li>Sponzoři ?</li>
                            <li>Podmínky ?</li>
                        </ul>
                    </div>
                    <span>© DELTA - SŠIE, s.r.o. - Všechna práva vyhrazena</span>
                </div>
                <div className={style.map}>
                    <div>
                        Mapa
                    </div>
                </div>
                <div className={style.question}>
                    <form>
                        <div className={style.row}>
                            <div>
                                <label>Jméno a Příjmení:</label>
                                <input type="text" name="name" placeholder="Bořivoj Olský"></input>
                            </div>
                            <div>
                                <label>Váš email:</label>
                                <input type="text" name="email" placeholder="email@email.cz"></input>
                            </div>
                        </div>
                        <div className={style.x}>
                            <label>Váš email:</label>
                            <input type="text" name="email" placeholder="email@email.cz"></input>
                        </div>
                    </form>
                    <div>
                        <img src="/images/delta-logo.png" height="80"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;