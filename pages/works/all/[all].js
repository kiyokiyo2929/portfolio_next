import clientPromise from "../../../lib/mongodb";
import Head from "next/head"

import Layout from "../../../components/layout_navbar_footer";
import AllWorks from "../../../components/all_works";
import WorkHeader from "../../../components/work";

const ObjectId = require('mongodb').ObjectID;

export default function EachWork(work){
    return(
        <>
         <Head><title> {work.work.name} / New-Gier</title></Head>
         <div>
             <h2>WORK</h2>
             <h3>{work.work.name}</h3>
         </div>
        </>
    )
}

export async function getServerSideProps({params}){
    const id = params.all;
    const client = await clientPromise;
    const db = client.db("myFirstDatabase");
    const data = await db.collection("portfolios").findOne({"_id":ObjectId(id)})
    const work = JSON.parse(JSON.stringify(data));

    return {
        props:{work}
    }
}

EachWork.getLayout=(page)=>(
    <Layout>
       <WorkHeader>
          <AllWorks>
             {page}
          </AllWorks>
       </WorkHeader>
    </Layout>
)