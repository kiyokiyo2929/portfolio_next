import Layout  from "../../../components/layout_navbar_footer";
import ReactWorkLayout from "../../../components/react_works";
import WorkHeader from "../../../components/work";

import Head from "next/head";

export default function ReactWorks(){
    return (
        <>
         <Head><title>Works with React.js / Neu-Gier</title></Head>
        </>
    )
}

ReactWorks.getLayout = (page)=>(
    <Layout>
      <WorkHeader>
        <ReactWorkLayout>
        {page}
        </ReactWorkLayout>
      </WorkHeader>
    </Layout>
)