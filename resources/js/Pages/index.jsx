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
            <Section className={style.soutez}>
                <h2 id="soutez">O Soutěži</h2>
                <p>
                    Pardubický Kraťas je studentská filmová soutěž studentů středních škol a druhého stupně základních škol. 
                    Cílem tohoto projektu je nejenom vytvoření regionální soutěže krátkých studentských filmů s celostátním přesahem,
                    ale i snaha <b>motivovat studenty k mediální tvůrčí činnosti</b> a <b>obohatit kulturní nabídku pardubického regionu</b>. 
                </p>
            </Section>
            <Section className={style.kategorie}>
                <div className={style.triangle} >
                    <h2 id="kategorie">Kategorie &amp; ceny</h2>
                </div>
                <Categories />
            </Section>
            <div className={style.cameraPhoto}>
                <div className={style.triangle} />
                <div className={style.photo} />
                <div className={style.triangle} />
            </div>
            <Section className={style.prihlaska}>
                <div>
                    <h2 id="prihlaska">Přihláška</h2>
                    <span>Vyplňme spolu přihlášku jednoduše ve třech krocích</span>
                </div>
                <ApplicationPoints />
            </Section>
            <Footer />
        </Layout>
    )
}

export default HomePage;