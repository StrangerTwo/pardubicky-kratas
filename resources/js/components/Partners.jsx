import React, {useState, useEffect} from 'react'

import style from "../../css/Home.module.css"

const Partners = () => {
    const partners = [
        {
            name: 'Pardubický kraj',
            image: '/images/pardubicky-kraj.svg',
            text: 'Txt o partnerovy se mění s logem pratnera'
        },
        {
            name: 'Magistrát města Pardubice',
            image: '/images/magistrat-mesta-pardubice.svg',
            text: 'Txt o partnerovy se mění s logem pratnera'
        },
        {
            name: 'FOMEI',
            image: '/images/fomei.svg',
            text: 'Txt o partnerovy se mění s logem pratnera'
        },
        {
            name: 'VčVSAFV a Rychnovská 8',
            image: '/images/vcvsafv.png',
            text: 'Txt o partnerovy se mění s logem pratnera'
        }
    ];


    const [selected, setSelected] = useState(0);

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