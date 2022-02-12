import React, {useState, useEffect} from 'react'

import style from "../../css/Home.module.css"

const Partners = () => {
    const partners = [
        {
            name: 'FOMEI',
            image: '/images/fomei.png',
            text: 'Txt o partnerovy se mění s logem pratnera'
        },
        {
            name: 'Východočeské volné sdružení pro amatérský film a video, z.s.',
            image: '/images/vcvsafv.png',
            text: 'Txt o partnerovy se mění s logem pratnera'
        },
        {
            name: 'Magistrát města Pardubice',
            image: '/images/magistrat-mesta-pardubice.png',
            text: 'Txt o partnerovy se mění s logem pratnera'
        },
        {
            name: 'Pardubický kraj',
            image: '/images/pardubicky-kraj.png',
            text: 'Txt o partnerovy se mění s logem pratnera'
        },
        {
            name: 'Rychnovská 8',
            image: '/images/rychnovska-8.png',
            text: 'Txt o partnerovy se mění s logem pratnera'
        }
    ];


    const [selected, setSelected] = useState(partners.length - 1);

    const select = (partner) => {
        setSelected(partners.indexOf(partner));
    }

    const getPosition = (partner) => {
        const index = partners.indexOf(partner);
        const position = selected - index >= 0 ? selected - index : selected - index + partners.length;

        if (!position) return 8;

        return 45 + (position - 1) * 12;
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