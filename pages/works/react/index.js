import Layout  from "../../../components/layout_navbar_footer";
import ReactWorkLayout from "../../../components/react_works";
import WorkHeader from "../../../components/work";

import Head from "next/head";

export default function ReactWorks(){
    return (
        <>
         <Head>
            <title>Works with React.js / Neu-Gier</title>
             <meta name="description" content="This page is to introduce my programing works with React.js. I'm Kiyohide Hayashi. I'm Japanese. I'm a full stack developer. I live in Berlin. I can use JavaScript / React.js / Next.js / Node.js / Express.js and MongoDB."/>
         </Head>
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