import React from 'react'

import style from "../../css/Home.module.css"

const Section = ({children, className, id}) => {

    return (
        <section className={style.section + " " + className} id={id}>
            {children}
        </section>
    )
}

export default Section