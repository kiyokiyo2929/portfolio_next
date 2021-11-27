import Layout  from "../../../components/layout_navbar_footer";
import MongoWorkLayout from "../../../components/mongo_works";
import WorkHeader from "../../../components/work";
import Head from "next/head";

export default function MongoWorks(){
    return (
        <>
        <Head><title>Works with MongoDB / Neu-Gier</title></Head>
        </>
    )
}

MongoWorks.getLayout = (page)=>(
    <Layout>
       <WorkHeader>
        <MongoWorkLayout>
        {page}
        </MongoWorkLayout>
       </WorkHeader>
    </Layout>
)