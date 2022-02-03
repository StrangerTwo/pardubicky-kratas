import React from 'react'

import style from "../../css/Home.module.css"

const Section = ({children}) => {

    return (
        <section className={style.section}>
            {children}
        </section>
    )
}

export default Section