import Link from "next/link";
import Head from "next/head";
import React, {useState, useEffect } from "react";
import Layout from "../../components/layout_navbar_footer"

export default function Contact(){
    const [effect, setEffect] = useState(false);

    useEffect(()=>{
        setEffect(true)
    }, [])

    return(
        <>
        <Head>
            <title> Contact / Neu-Gier </title>
        </Head>
        <div id="contact_flext">
            <div id="contact_left">
                <div className="header_font">
                    <h2 className={`page_header ${effect?"page_header_effect":""}`}>Contact</h2>
                </div>
                <p>Kiyohide Hayashi</p>
            </div>
            <div id="contact_right">

            </div>
        </div>
        </>
    )
}

Contact.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
)