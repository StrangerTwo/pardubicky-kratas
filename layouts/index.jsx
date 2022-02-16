import React from "react";
import Head from 'next/head'

import Navigation from "../components/Navigation"

const Layout = ({children}) => {
    
    return (
        <>
        
        <Head>
            <meta name="description" content="Pardubický kraťas je nová studentská filmová soutěž studentů středních škol a druhého stupně základních škol s cílem motivovat studenty k mediální tvůrčí činnosti a obohatit kulturní nabídku pardubického regionu."/>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-X1PKZBGEED`}
            />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-X1PKZBGEED');
                `,
                }}
            />
        </Head>
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