import Link from "next/link";
import Head from "next/head";
import React, {useState, useEffect } from "react";
import Layout from "../../components/layout_navbar_footer";
import WorkHeader from "../../components/work";


export default function Works(){
    return(
        <>
        <Head>
            <title>Work / Neu-Gier</title>
        </Head>
            <div id="work_left_only">
                <ul className="tab_list">
                    <li className="normal_tag tag_event"><Link href="/works/all"><a>All</a></Link></li>
                    <li className="normal_tag tag_event"><Link href="/works/react"><a>React.js</a></Link></li>
                    <li className="normal_tag tag_event"><Link href="/works/next"><a>Next.js</a></Link></li>
                    <li className="normal_tag tag_event"><Link href="/works/node"><a>Node.js</a></Link></li>
                    <li className="normal_tag tag_event"><Link href="/works/mongo"><a>MongoDB</a></Link></li>
                </ul>
            </div>
        </>
    )
}

Works.getLayout = (page) => (
    <Layout>
      <WorkHeader>
        {page}
      </WorkHeader>
    </Layout>
)