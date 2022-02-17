import React, {useState, useEffect} from 'react'

import Image from 'next/image';

import style from "../styles/Home.module.css"

const Partners = () => {
    const partners = [
        {
            name: 'VčVSAFV a Rychnovská 8',
            image: '/images/R8_a_VcVSAFV.svg',
            text: 'Východočeské&nbsp;volné&nbsp;sdružení&nbsp;pro&nbsp;amatérský&nbsp;film&nbsp;a&nbsp;video&nbsp;z.s. je  hlavní organizátor soutěže Rychnovská&nbsp;8, nejstarší soutěže neprofesionálních filmů v ČR.'
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
            text: 'Záštitu přijal náměstek hejtmana Pardubického kraje a radní Pardubického kraje pro kulturu Ing.&nbsp;Roman&nbsp;Línek,&nbsp;MBA.'
        }
    ];

    const [selected, setSelected] = useState(partners.length - 1);
    const [autoInterval, setAutoInterval] = useState(0);

    useEffect(() => {
        setupAutoInterval();
        return () => {
            clearInterval(autoInterval);
        }
    }, [])

    const setupAutoInterval = () => {
        clearInterval(autoInterval);
        const interval = setInterval(() => {
            setSelected(prev => prev + 1 == partners.length ? 0 : prev + 1)
        }, 3000);

        setAutoInterval(interval);
    }

    const select = (partner) => {
        setSelected(partners.indexOf(partner));
        setTimeout(setupAutoInterval, 7000);    // Celkem 10s na přečtení, 7000 + 3000 interval
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
                        <Image src={partner.image} alt={partner.name} layout="fill"/>
                    </div>
                ))}
            </div>
            <div className={style.partnerDetail}>
                <h2>Partneři</h2>
                <span className={style.name}>{partners[selected].name}</span>
                <p dangerouslySetInnerHTML={{ __html: partners[selected].text}} />
            </div>
        </>
    )
}

export default Partners