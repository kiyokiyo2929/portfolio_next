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
            <meta name="description" content={`This page is to introduce my programing work. I\'m Kiyohide Hayashi. I\'m Japanese. I\'m a full stack developer. I live in Berlin. I can use JavaScript / React.js / Next.js / Node.js / Express.js and MongoDB.`}/>
        </Head>
          <div className="work_flex">
            <div id="work_left">
                <ul className="tab_list">
                    <li className="normal_tag tag_event"><Link href="/works/all"><a>All</a></Link></li>
                    <li className="normal_tag tag_event"><Link href="/works/react"><a>React.js</a></Link></li>
                    <li className="normal_tag tag_event"><Link href="/works/next"><a>Next.js</a></Link></li>
                    <li className="normal_tag tag_event"><Link href="/works/node"><a>Node.js</a></Link></li>
                    <li className="normal_tag tag_event"><Link href="/works/mongo"><a>MongoDB</a></Link></li>
                </ul>
            </div>
             <div id="work_right"></div>
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