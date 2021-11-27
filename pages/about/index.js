import Link from "next/link";
import Head from "next/head";
import React, {useState, useEffect } from "react";

import Layout from "../../components/layout_navbar_footer"

export default function About(){
    const [effect, setEffect] = useState(false);

    useEffect(()=>{
        setEffect(true)
    }, [])

    return(
        <>
        <Head>
            <title>About / Neu-Gier</title>
        </Head>
        <div className="header_font">
           <h2 className={`page_header ${effect?"page_header_effect":""}`}>About</h2>
        </div>
        </>
    )
}

About.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
)