import React from "react";

import Image from 'next/image';
import Link from 'next/link'

import style from "../styles/Home.module.css"

import Layout from '../layouts/index'
import Section from '../components/Section'

const HomePage = () => {
    
    return (
        <Layout title="Pardubický kraťas | Workshop" font="Poppins">
            <Section className={style.workshop} id="workshop">
                <div>
                    <div className={style.instructor}>
                        <Image src="/images/trnka.jpg" alt="Mgr. et MgA. Pavel Trnka" layout="fill" />
                    </div>
                    <div className={style.content}>
                        <h2>Workshop</h2>
                        <p>Letošní workshop na téma <em>Základy animací v Adobe Ae</em> je určen pro začátečníky a povede jej vysokoškolský pedagog, animátor, výtvarník <em>Pavel Trnka</em>.</p>
                        <p>Kapacita workshopu je omezena na <strong><span>15</span> osob</strong>.</p>
                        <p>Přihlašovat se můžete od <span>31.3.2022</span> do <span style={{color: '#0364B8'}}>6.4.2022 do 12:00 hod.</span> emailem na <Link href="mailto:richard.brun@delta-skola.cz" passHref><a>richard.brun@delta-skola.cz</a></Link>.</p>
                        <p>Workshop bude probíhat dne <span>7.4.2022 od 9:00 do 12:00 hod.</span></p>
                        <p>Budeme se těšit na vaši účast 😊.</p>
                    </div>
                </div>
                <Link href="/" passHref>
                    <a className={style.backToIndex}>Vrátit zpět</a>
                </Link>
            </Section>
        </Layout>
    )
}

export default HomePage;