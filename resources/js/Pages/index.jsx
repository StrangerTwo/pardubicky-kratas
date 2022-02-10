import React from "react";

import style from "../../css/Home.module.css"

import Layout from '../Layouts/index'
import PageHead from '../components/PageHead'
import Section from '../components/Section'
import Footer from '../components/Footer'

import Categories from '../components/Categories'
import ApplicationPoints from '../components/ApplicationPoints'

const HomePage = () => {
    
    return (
        <Layout>
            <PageHead/>
            <Section id="soutez" className={style.soutez}>
                <h2>O Soutěži</h2>
                <p>
                    Pardubický Kraťas je studentská filmová soutěž studentů středních škol a druhého stupně základních škol. 
                    Cílem tohoto projektu je nejenom vytvoření regionální soutěže krátkých studentských filmů s celostátním přesahem,
                    ale i snaha <b>motivovat studenty k mediální tvůrčí činnosti</b> a <b>obohatit kulturní nabídku pardubického regionu</b>. 
                </p>
            </Section>
            <Section className={style.kategorie}>
                <div id="kategorie" className={style.triangle} >
                    <h2>Kategorie &amp; ceny</h2>
                </div>
                <Categories />
            </Section>
            <div className={style.cameraPhoto}>
                <div className={style.triangle} />
                <div className={style.photo} />
                <div className={style.triangle} />
            </div>
            <Section className={style.prihlaska} id="prihlaska">
                <div>
                    <h2>Přihláška</h2>
                    <span>Vyplň přihlášku jednoduše ve dvou krocích</span>
                </div>
                <ApplicationPoints />
            </Section>
            <div className={style.stage}>
                <span>Natoč krátký film a pojď soutěžit!</span>
            </div>
            <Section className={style.projekce} id="projekce">
                <div>
                    <h2>Projekce</h2>
                    <span>Projekce soutěžních studentských filmů budou probíhat online prostřednictvím videostreamu na našem videokanálu Delta Film</span>
                </div>
                <div className={style.videoExamples}>
                    <div className={style.video}>
                        <img src="/images/example_1.jpg" />
                        <div className={style.playBtn}>
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                    <div className={style.video}>
                        <img src="/images/example_2.jpg" />
                        <div className={style.playBtn}>
                            <i className="fas fa-angle-right"></i>
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
                                <img src="/images/peml.jpg" alt="MgA. Jan Peml" />
                            </div>
                            <span>
                                <b>MgA. Jan Peml</b> je střihač, kameraman a režisér. Je absolventem FAMU Praha. V současnosti vyučuje a vede pracovište Rozhlasová a televizní laboratoř na Institutu komunikačních studií a žurnalistiky UK FSV.
                            </span>
                        </div>
                        <div className={style.porotce}>
                            <div className={style.portrait}>
                                <img src="/images/spitalsky.jpg" alt="Michal Špitálský" />
                            </div>
                            <span>
                                <b>Michal Špitálský</b> je student druhého ročníku oboru Film and TV Production na Northumbria University v anglickém Newcastlu. Ve volném čase pracuje na filmových dokumentech, spolupracuje na festivalu Jeden svět. Michal je absolventem naší školy.
                            </span>
                        </div>
                        <div className={style.porotce}>
                            <div className={style.portrait}>
                                <img src="/images/skrobak.jpg" alt="Ing. Martin Škrobák" />
                            </div>
                            <span>
                                <b>Ing. Martin Škrobák</b> je předseda Východočeského volného sdružení pro amatérský film a video z.s. a hlavní organizátor soutěže Rychnovská 8.
                            </span>
                        </div>
                        <div className={style.porotce}>
                            <div className={style.portrait}>
                                <img src="/images/trnka.jpg" alt="Mgr. et MgA. Pavel Trnka" />
                            </div>
                            <span>
                                <b>Mgr. et MgA. Pavel Trnka, Ph.D.</b> je výtvarník, režisér a autor animovaných filmů. Pracuje jako vysokoškolský pedagog na Pedagogické fakultě v Hradci Králové, kde garantuje řadu předmětů oboru Grafická tvorba a multimédia.
                            </span>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className={style.partners} id="partneri">
                <h2>Partneři</h2>
            </Section>
            <Section className={style.kontakty} id="kontakty">
                <h2>Kontakty</h2>
                <div>
                    <div className={style.contacts}>
                        <div className={style.contact}>
                            <img src="/images/brun.jpg" alt="Richard Brun"/>
                            <div>
                                <span className={style.name}>Richard Brun</span>
                                <span>Tel.: +420 123 456 789</span>
                                <span>Email: info@pardubickykratas.cz</span>
                            </div>
                        </div>
                        <div className={style.contact}>
                            <img src="/images/votavova.webp" alt="Gabriela Votavová"/>
                            <div>
                                <span className={style.name}>Gabriela Votavová</span>
                                <span>Tel.: +420 123 456 789</span>
                                <span>Email: info@pardubickykratas.cz</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.dotaz}>
                        <form method="post" action="/send">
                            <div>
                                <input type="text" name="subject" placeholder="Téma dotazu"></input>
                                <input type="text" name="email" placeholder="Tvůj email"></input>
                            </div>
                            <textarea name="content" rows="6" placeholder="Popis problému..."></textarea>
                        </form>
                    </div>
                </div>
            </Section>
            <Footer />
        </Layout>
    )
}

export default HomePage;