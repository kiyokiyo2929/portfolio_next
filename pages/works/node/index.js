import Layout  from "../../../components/layout_navbar_footer";
import NodeWorkLayout from "../../../components/node_works";
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
        <NodeWorkLayout>
        {page}
        </NodeWorkLayout>
    </Layout>
)