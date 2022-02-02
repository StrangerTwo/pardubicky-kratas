import React from "react";

import style from "../../css/Home.module.css"

import Navigation from "../components/Navigation"

const Layout = ({children}) => {
    
    return (
        <div id={style.page}>
            <Navigation />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;