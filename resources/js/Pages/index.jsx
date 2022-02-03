import React from "react";

import style from "../../css/Home.module.css"

import Layout from '../Layouts/index'
import PageHead from '../components/PageHead'
import Section from '../components/Section'

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
                    <ul className={style.categories}>
                        <li>
                            <div className={style.categoryTitle}>Snímky studentů filmových škol do 21 let</div>
                            <div className={style.categoryContent}>Text o XXXX</div>
                        </li>
                        <li>
                            <div className={style.categoryTitle}>Juniorské filmové okénko</div>
                            <div className={style.categoryContent}>Text o XXXX</div>
                        </li>
                    </ul>
                </div>
            </Section>
        </Layout>
    )
}

export default HomePage;