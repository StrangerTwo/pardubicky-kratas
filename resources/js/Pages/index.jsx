import React from "react";

import style from "../../css/Home.module.css"

import Layout from '../Layouts/index'
import PageHead from '../components/PageHead'
import Section from '../components/Section'
import Footer from '../components/Footer'

import Categories from '../components/Categories'

const HomePage = () => {
    
    return (
        <Layout>
            <PageHead/>
            <Section id="soutez">
                <div className={style.sectionContent}>
                    <h2>O Soutěži</h2>
                    <p>
                        Pardubický Kraťas je studentská filmová soutěž studentů středních škol a druhého stupně základních škol. 
                        Cílem tohoto projektu je nejenom vytvoření regionální soutěže krátkých studentských filmů s celostátním přesahem,
                        ale i snaha motivovat studenty k mediální tvůrčí činnosti a obohatit kulturní nabídku pardubického regionu. 
                    </p>
                </div>
            </Section>
            <Section id="kategorie">
                <div className={style.sectionTitle}>
                    <h2>Kategorie</h2>
                </div>
                <div className={style.sectionContent}>
                    <Categories />
                </div>
            </Section>
            <div className={style.cameraPhoto}>
                <div className={style.triangles} />
                <div className={style.photo} />
                <div className={style.triangles} />
            </div>
            <Section id="prihlaska">
                <div className={style.sectionContent}>
                    <h2>Přihláška</h2>
                    <Categories />
                </div>
            </Section>
            <Footer />
        </Layout>
    )
}

export default HomePage;