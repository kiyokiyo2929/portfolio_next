import Link from "next/link";
import Head from "next/head";
import React, {useState, useEffect } from "react";
import Layout from "../../components/layout_navbar_footer";
import WorkLayout from "../../components/work";


export default function Works(){
    const [effect, setEffect] = useState(false);
    console.log('kiyokiyo')

    useEffect(()=>{
        setEffect(true)
    }, [])
    return(
        <>
        <Head>
            <title>Work / Neu-Gier</title>
        </Head>
        {/* <h2 className={`page_header ${effect?"page_header_effect":""}`}>Work</h2> */}
        <ul>
            <li><Link href="/works/all"><a>All</a></Link></li>
            <li><Link href="/works/react"><a>React</a></Link></li>
            <li><Link href="/works/next"><a>Next</a></Link></li>
            <li><Link href="/works/node"><a>Node</a></Link></li>
            <li><Link href="/works/mongo"><a>Mongo</a></Link></li>
        </ul>
        </>
    )
}

Works.getLayout = (page) => (
    <Layout>
      <WorkLayout>
        {page}
      </WorkLayout>
    </Layout>
)