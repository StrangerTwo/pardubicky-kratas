import React from "react";

import style from "../../css/Home.module.css"

import Navigation from "../components/Navigation"

const Layout = ({children}) => {
    
    return (
        <>
        
        <Navigation />
        <main>
            <div>
                {children}
            </div>
        </main>
        </>
    )
}

export default Layout;