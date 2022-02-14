import React, {useState, useEffect} from 'react'

import style from "../../css/Home.module.css"

const Partners = () => {
    const partners = [
        {
            name: 'VčVSAFV a Rychnovská 8',
            image: '/images/R8_a_VcVSAFV.svg',
            text: 'Východočeské volné sdružení pro amatérský film a video z.s. je  hlavní organizátor soutěže Rychnovská 8, nejstarší soutěže neprofesionálních filmů v ČR.'
        },
        {
            name: 'FOMEI',
            image: '/images/fomei.svg',
            text: 'Cena firmy FOMEI pro každou kategorii a marketingová spolupráce.'
        },
        {
            name: 'Magistrát města Pardubice',
            image: '/images/magistrat-mesta-pardubice.svg',
            text: 'Partner soutěže.'
        },
        {
            name: 'Pardubický kraj',
            image: '/images/pardubicky-kraj.svg',
            text: 'Záštitu přijal náměstek hejtmana Pardubického kraje a radní Pardubického kraje pro kulturu Ing. Roman Línek, MBA.'
        }
    ];


    const [selected, setSelected] = useState(partners.length - 1);

    const select = (partner) => {
        setSelected(partners.indexOf(partner));
    }

    const getPosition = (partner) => {
        const index = partners.indexOf(partner);
        if (index == selected) return 8;
        
        const position = index > selected ? index : index + 1;


        return 50 + (position - 1) * 15;
    }

    return (
        <>
            <div className={style.slideshow}>
                {partners.map((partner, i) => (
                    <div onClick={() => select(partner)} className={style.partner + (selected == i ? ` ${style.selected}` : "" )} key={partner.name} style={{
                        right: `${getPosition(partner)}%`
                    }}>
                        <img src={partner.image} alt={partner.name}/>
                    </div>
                ))}
            </div>
            <div className={style.partnerDetail}>
                <h2>Partneři</h2>
                <span className={style.name}>{partners[selected].name}</span>
                <p>{partners[selected].text}</p>
            </div>
        </>
    )
}

export default Partners