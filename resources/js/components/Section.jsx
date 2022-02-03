import React from 'react'

import style from "../../css/Home.module.css"

const Section = ({children, className}) => {

    return (
        <section className={style.section + " " + className}>
            {children}
        </section>
    )
}

export default Section