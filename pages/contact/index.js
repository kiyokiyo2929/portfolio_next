import Link from "next/link";
import Head from "next/head";
import Image from "next/image"
import React, {useState, useEffect } from "react";

import Layout from "../../components/layout_navbar_footer"

export default function Contact(){
    const [effect, setEffect] = useState(false);

    const pop_up = () =>{
        alert("kiyokiyo2929@gmail.com")
      }

    useEffect(()=>{
        setEffect(true)
    }, [])

    return(
        <>
        <Head>
            <title> Contact / Neu-Gier </title>
        </Head>
        <div id="contact_flex">
            <div id="contact_left">
                <div className="header_font">
                    <h2 className={`page_header ${effect?"page_header_effect":""}`}>Contact</h2>
                </div>
                <p id="contact_name">Kiyohide Hayashi</p>
                <div className="icon_wrapper">
                    <div onClick={pop_up}><Image src="/gmail.png" width={22} height={22}/></div>
                    <div><a href="https://www.linkedin.com/in/kiyohidehayashi/"><Image src="/linkedin.png" width={22} height={22}/></a></div>
                    <div><a href="https://www.xing.com/profile/Kiyohide_Hayashi/cv"><Image src="/xing.png"   width={22} height={22} /></a></div>
                    <div><a href="https://github.com/kiyokiyo2929"><Image src="/github.png" width={22} height={22}/></a></div>
                    <div><a href="https://www.instagram.com/go_to_office_/"><Image src="/instagram.png"  width={22} height={22} /></a></div>
                </div>
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