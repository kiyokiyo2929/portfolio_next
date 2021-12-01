import Layout  from "../../../components/layout_navbar_footer";
import NodeWorkLayout from "../../../components/node_works";
import WorkHeader from "../../../components/work";
import Head from "next/head";

export default function NodeWorks(){
    return (
        <>
         <Head>
             <title>Works with Node.js / Neu-Gier</title>
             <meta name="description" content="This page is to introduce my programing works with Node.js. I'm Kiyohide Hayashi. I'm Japanese. I'm a full stack developer. I live in Berlin. I can use JavaScript / React.js / Next.js / Node.js / Express.js and MongoDB."/>
             </Head>
        </>
    )
}

NodeWorks.getLayout = (page)=>(
    <Layout>
      <WorkHeader>
        <NodeWorkLayout>
        {page}
        </NodeWorkLayout>
       </WorkHeader>
    </Layout>
)