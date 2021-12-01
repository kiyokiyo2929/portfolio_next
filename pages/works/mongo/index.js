import Layout  from "../../../components/layout_navbar_footer";
import MongoWorkLayout from "../../../components/mongo_works";
import WorkHeader from "../../../components/work";
import Head from "next/head";

export default function MongoWorks(){
    return (
        <>
            <Head>
            <title>Works with MongoDB / Neu-Gier</title>
            <meta name="description" content="This page is to introduce my programing works with MongoDB. I'm Kiyohide Hayashi. I'm Japanese. I'm a full stack developer. I live in Berlin. I can use JavaScript / React.js / Next.js / Node.js / Express.js and MongoDB."/>
            </Head>
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