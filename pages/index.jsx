import React from "react";

import Image from 'next/image';
import Link from 'next/link'

import style from "../styles/Home.module.css"

import Layout from '../layouts/index'
import PageHead from '../components/PageHead'
import Section from '../components/Section'
import Footer from '../components/Footer'

import Categories from '../components/Categories'
import ApplicationPoints from '../components/ApplicationPoints'
import Partners from '../components/Partners'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
    
    return (
        <Layout>
            <PageHead/>
            <Section id="soutez" className={style.soutez}>
                <h2>O soutěži</h2>
                <p>
                    Pardubický kraťas je nová studentská filmová soutěž studentů středních škol a druhého stupně základních škol.
                    Cílem tohoto projektu je nejenom vytvoření regionální soutěže krátkých studentských filmů s celostátním přesahem,
                    ale i snaha <strong>motivovat studenty k mediální tvůrčí činnosti</strong> a <strong>obohatit kulturní nabídku pardubického regionu</strong>. 
                </p>
            </Section>
            <Section className={style.kategorie}>
                <div id="kategorie" className={style.triangle} >
                    <h2>Kategorie &amp; ceny</h2>
                </div>
                <div>
                    <Categories />
                    <div className={style.rewards} >
                        <span style={{fontSize: 'x-large'}}><strong>Ceny pro výherce v každé kategorii</strong></span>
                        <ol>
                            <li>5.000,- Kč</li>
                            <li>3.000,- Kč</li>
                            <li>2.000,- Kč</li>
                        </ol>
                        <p>Zvláštní cena FOMEI-poukazy, foto-video technika</p>
                    </div>
                </div>
            </Section>
            <div className={style.cameraPhoto}>
                <div className={style.triangle} />
                <div className={style.photo} />
                <div className={style.triangle} />
            </div>
            <Section className={style.prihlaska} id="prihlaska">
                <div>
                    <h2>Přihláška</h2>
                    <p>Vyplň přihlášku jednoduše ve dvou krocích</p>
                </div>
                <ApplicationPoints />
            </Section>
            <div className={style.stage}>
            </div>
            <Section className={style.projekce} id="projekce">
                <div>
                    <h2>Projekce</h2>
                    <p>Projekce soutěžních studentských filmů budou probíhat online prostřednictvím videostreamu na našem videokanálu Delta Film</p>
                </div>
                <div className={style.videoExamples}>
                    <div className={style.video}>
                        <Image src="/images/example_1.jpg" alt="Example 1" layout="fill"/>
                        <div className={style.playBtn}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                    <div className={style.video}>
                        <Image src="/images/example_2.jpg" alt="Example 2" layout="fill"/>
                        <div className={style.playBtn}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                </div>
            </Section>
            <Section className={style.porota} id="vyhodnoceni">
                <h2>Odborná porota</h2>
                <div>
                    <p>
                    Filmy bude hodnotit porota sestavená z odborníků z oblasti filmové, mediální a publicistické tvorby.<br/>
                    Slavnostní vyhlášení a setkání autorů vítězných snímků s porotou a zástupci partnerů proběhne ve čtvrtek dne 7.4.2022 v Pardubicích na SŠ DELTA, Ke Kamenci 151.
                    </p>
                    <div className={style.separator}/>
                    <div className={style.porotci}>
                        <div className={style.porotce}>
                            <div className={style.portrait}>
                                <Image src="/images/peml.jpg" alt="MgA. Jan Peml" layout="fill"/>
                            </div>
                            <span>
                                <strong>MgA. Jan Peml</strong> je střihač, kameraman a režisér. Je absolventem FAMU Praha. V současnosti vyučuje a vede pracovište Rozhlasová a televizní laboratoř na Institutu komunikačních studií a žurnalistiky UK FSV.
                            </span>
                        </div>
                        <div className={style.porotce}>
                            <div className={style.portrait}>
                                <Image src="/images/spitalsky.jpg" alt="Michal Špitálský" layout="fill"/>
                            </div>
                            <span>
                                <strong>Michal Špitálský</strong> je student druhého ročníku oboru Film and TV Production na Northumbria University v anglickém Newcastlu. Ve volném čase pracuje na filmových dokumentech, spolupracuje na festivalu Jeden svět. Michal je absolventem naší školy.
                            </span>
                        </div>
                        <div className={style.porotce}>
                            <div className={style.portrait}>
                                <Image src="/images/skrobak.jpg" alt="Ing. Martin Škrobák" layout="fill"/>
                            </div>
                            <span>
                                <strong>Ing. Martin Škrobák</strong> je předseda Východočeského volného sdružení pro amatérský film a video z.s. a hlavní organizátor soutěže Rychnovská 8.
                            </span>
                        </div>
                        <div className={style.porotce}>
                            <div className={style.portrait}>
                                <Image src="/images/trnka.jpg" alt="Mgr. et MgA. Pavel Trnka" layout="fill"/>
                            </div>
                            <span>
                                <strong>Mgr. et MgA. Pavel Trnka, Ph.D.</strong> je výtvarník, režisér a autor animovaných filmů. Pracuje jako vysokoškolský pedagog na Pedagogické fakultě v Hradci Králové, kde garantuje řadu předmětů oboru Grafická tvorba a multimédia.
                            </span>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className={style.partners} id="partneri">
                <Partners />
            </Section>
            <Section className={style.kontakty} id="kontakty">
                <h2>Kontakty</h2>
                <div>
                    <Link href="https://www.delta-skola.cz/" passHref>
                        <a>
                            <Image src="/images/delta.svg" alt="Delta - střední škola informatiky a ekonomie" width="250" height="112"/>
                        </a>
                    </Link>
                    <div className={style.contacts}>
                        <div className={style.contact}>
                            <Image src="/images/brun.jpg" alt="Richard Brun" width="100" height="100"/>
                            <div>
                                <span className={style.name}>Richard Brun</span>
                                <span>Tel.: +420 466 611 173</span>
                                <span>Email: info@pardubickykratas.cz</span>
                            </div>
                        </div>
                        <div className={style.contact}>
                            <Image src="/images/votavova.webp" alt="Gabriela Votavová" width="100" height="100"/>
                            <div>
                                <span className={style.name}>Gabriela Votavová</span>
                                <span>Tel.: +420 466 611 173</span>
                                <span>Email: info@pardubickykratas.cz</span>
                            </div>
                        </div>
                    </div>
                    <form className={style.dotaz} method="post" action="/send">
                        <div>
                            <input type="text" name="subject" placeholder="Téma dotazu"></input>
                            <input type="text" name="email" placeholder="Tvůj email"></input>
                        </div>
                        <textarea name="content" rows="6" placeholder="Popis problému..."></textarea>
                        <div className={style.submitRow}>
                            <button type="submit">Odeslat</button>
                            <div>
                                <Link href="https://www.instagram.com/pardubicky_kratas/" passHref>
                                    <a target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </Link>
                                <Link href="https://www.facebook.com/pardubickykratas" passHref>
                                    <a target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Section>
            <Footer />
        </Layout>
    )
}

export default HomePage;