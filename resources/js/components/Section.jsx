import React from 'react'

import style from "../../css/Home.module.css"

const Section = ({id, children}) => {

    return (
        <section id={id} className={style.section}>
            {children}
        </section>
    )
}

export default Section