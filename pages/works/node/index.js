import Layout  from "../../../components/layout_navbar_footer";
import NodeWorkLayout from "../../../components/node_works";
import WorkHeader from "../../../components/work";
import Head from "next/head";

export default function NodeWorks(){
    return (
        <>
         <Head><title>Works with Node.js / Neu-Gier</title></Head>
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