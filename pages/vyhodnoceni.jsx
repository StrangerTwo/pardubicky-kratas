import React, {useEffect, useState} from "react";

import Link from 'next/link'

import style from "../styles/Home.module.css"
import "react-image-gallery/styles/css/image-gallery.css";

import Layout from '../layouts/index'
import Section from '../components/Section'
import ImageGallery from 'react-image-gallery';
import { images } from "../lib/vyhlaseni";

const HomePage = () => {
    const [columnCount, setColumnCount] = useState(3);

    useEffect(() => {
        updateColumnCount();
        const listener = window.addEventListener('resize', updateColumnCount);
        return () => {
            window.removeEventListener('resize', listener);
        }
    }, [])

    const updateColumnCount = () => {
        setColumnCount(Math.floor(window.innerWidth / 500));
    }
    
    return (
        <Layout title="Pardubický kraťas | Vyhodnocení" font="Poppins">
            <Section className={style.vyhodnoceni} id="vyhodnoceni">
                <h2>Výsledková listina ročníku 2022</h2>

                <h3>Výsledky v kategoriích</h3>
                <div className={style.categories} style={{gridTemplateColumns: `repeat(${columnCount}, 1fr)`}}>
                    <div className={style.category}>
                        <div className={style.name}>Krátký film na regionální téma</div>
                        <ol className={style.winners}>
                            <li><span className={style.position}>1. a 2. cena</span><div>neudělena</div></li>
                            <li><span className={style.position}>3. cena</span><div><em>kolektivu autorů ZŠ Kolín</em> za snímek O drakovi v Kolíně</div></li>
                            <li><span className={style.position}>3. cena</span><div><em>Adamu Vápeníkovi a Tadeášová Kopčákovi</em> za snímek Kunětická hora</div></li>
                        </ol>
                    </div>
                    
                    <div className={style.category}>
                        <div className={style.name}>Krátký hraný film</div>
                        <ol className={style.winners}>
                            <li><span className={style.position}>1. cena</span><div>neudělena</div></li>
                            <li><span className={style.position}>2. cena</span><div><em>Natálii Slováková</em> za snímek Lockdown</div></li>
                            <li><span className={style.position}>3. cena</span><div><em>Gabriele Císařové</em> za snímek Vinyl</div></li>
                        </ol>
                    </div>
                    
                    <div className={style.category}>
                        <div className={style.name}>Animovaný film</div>
                        <ol className={style.winners}>
                            <li><span className={style.position}>1. cena</span><div><em>Sofii Fenykové</em> za snímek Společně</div></li>
                            <li><span className={style.position}>2. cena</span><div><em>Daně Morávkové</em> za snímek Smaženice</div></li>
                            <li><span className={style.position}>2. cena</span><div><em>Elišce Cvachové</em> za snímek Life Like</div></li>
                            <li><span className={style.position}>3. cena</span><div><em>Anně Marii Chrenkové</em> za snímek The Playground</div></li>
                            <li><span className={style.position}>3. cena</span><div><em>Adamu Folprechtovi</em> za snímek Balada o očích topičových</div></li>
                        </ol>
                    </div>
                    
                    <div className={style.category}>
                        <div className={style.name}>Videoklip a YouTube videoprezentace</div>
                        <ol className={style.winners}>
                            <li><span className={style.position}>1. cena</span><div><em>Adamu Hozovi</em> za snímek Skluzavka</div></li>
                            <li><span className={style.position}>2. cena</span><div>neudělena</div></li>
                            <li><span className={style.position}>3. cena</span><div><em>Ladislavu Horákovi</em> za snímek Oblaka – naučné video</div></li>
                        </ol>
                    </div>
                    
                    <div className={style.category}>
                        <div className={style.name}>Juniorské filmové okénko (pro žáky 2. stupně ZŠ)</div>
                        <ol className={style.winners}>
                            <li><span className={style.position}>1. cena</span><div><em>Jáchymovi Jakoubkovi</em> za snímek A jéje, …umělá inteligence!</div></li>
                            <li><span className={style.position}>2. cena</span><div><em>Davidu Kuncovi</em> za snímek Pusa</div></li>
                            <li><span className={style.position}>3. cena</span><div><em>Kateřině Menčíkové</em> za snímek God od nature</div></li>
                        </ol>
                    </div>
                    
                    <div className={style.category}>
                        <div className={style.name}>Snímky studentů filmových škol do 21 let</div>
                        <ol className={style.winners}>
                            <li><span className={style.position}>1. cena</span><div><em>Marii Kowersové</em> za snímek Toulky s rodinou Rádsetoulavou</div></li>
                            <li><span className={style.position}>2. cena</span><div><em>Ondřejovi Dautovskému a Janu Galdovi</em> za snímek Naivní pohled Luďka Farkaše</div></li>
                            <li><span className={style.position}>3. cena</span><div><em>Veronice Hýblové</em> za snímek Projekt K.P.</div></li>
                        </ol>
                    </div>
                </div>

                <h3>Speciální ceny</h3>
                <div className={style.awards} style={{gridTemplateColumns: `repeat(${columnCount}, 1fr)`}}>
                    <div className={style.award}>
                        <div className={style.name}>Cena náměstka hejtmana Pardubického kraje pro kulturu Romana Línka</div>
                        <p><em>Anně Amálii Komárové</em> za snímek Proč padají hvězdy?</p>
                    </div>
                    <div className={style.award}>
                        <div className={style.name}>Cena primátora města Martina Charváta</div>
                        <p><em>Andree Janovské</em> za snímek Celý svět je tvým plátnem</p>
                    </div>
                    <div className={style.award}>
                        <div className={style.name}>Cena FOMEI s.r.o. Hradec Králové</div>
                        <p><em>Ondřeji Vasilovčíkovi a Jaroslavu Nymburskému</em> za snímek Art of insanity</p>
                    </div>
                    <div className={style.award}>
                        <div className={style.name}>Cena Východočeského volného sdružení pro amatérský film a video</div>
                        <p><em>Jáchymovi Jakoubkovi</em> za snímek: A jéje, …umělá inteligence!</p>
                        <p><em>Daně Morávkové</em> za snímek Smaženice</p>
                    </div>
                    <div className={style.award}>
                        <div className={style.name}>Cena ředitele školy DELTA s.r.o.</div>
                        <p><em>Frederiku Černíkovi</em> za animovanou znělku soutěže Pardubický kraťas</p>
                    </div>
                </div>

                <h3>Fotogalerie</h3>
                <div className={style.gallery}>
                  <ImageGallery items={images} />
                </div>

                <Link href="/" passHref>
                    <a className={style.backToIndex}>Vrátit zpět</a>
                </Link>
            </Section>
        </Layout>
    )
}

export default HomePage;