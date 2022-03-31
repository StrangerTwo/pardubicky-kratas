import React from "react";
import Head from 'next/head'

import Navigation from "../components/Navigation"

const Layout = ({children, navigation, title, font}) => {
    
    return (
        <>
            <Head>
                <title>{title}</title>
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
                {/* Global site tag (gtag.js) - Google Analytics */}
                <script async src={"https://www.googletagmanager.com/gtag/js?id=UA-224041325-1"}/>
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-224041325-1');
                    `,
                }}/>
                {font == "Poppins" && <>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
                </>}
                
            </Head>
            {navigation && <Navigation />}
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout;