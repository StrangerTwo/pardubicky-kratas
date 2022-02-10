import React from 'react'

import style from "../../css/Home.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <iframe id="contactMap" allowFullScreen="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10251.198346408395!2d15.781613262147543!3d50.033851075892265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dcc8b132e5567%3A0x375fdea61136abb9!2sDELTA+-+St%C5%99edn%C3%AD+%C5%A1kola+informatiky+a+ekonomie%2C+s.r.o.!5e0!3m2!1scs!2sid!4v1541001901903"></iframe>
        </footer>
    )
}

export default Footer;