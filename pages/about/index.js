import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
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
        <div id="about_flex">
            <div id="about_left">
                 <div className="header_font">
                  <h2 className={`page_header ${effect?"page_header_effect":""}`}>About</h2>
                 </div>
                 <div id="about_description">
                     <p id="first_description">I'm Kiyohide Hayashi.</p>
                     <p>I'm Japanese.</p>
                     <p>I'm a full stack developer.</p>
                     <p>I live in Berlin.</p>
                     <p>I can speak Japanese and English.</p>
                     <p>I can use JavaScript/React.js/Next.js/Node.js/Express.js and MongoDB.</p>
                     <p>I like contemporary art and design.</p>
                </div>
            </div>
            <div id="about_right">
                <div id="image_position">
                <Image src="/profile3.jpeg" width={550} height={320} id="profile_picture"/>
                </div>
            </div>

        </div>
        </>
    )
}

About.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
)