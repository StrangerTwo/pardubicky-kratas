import React from "react";

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