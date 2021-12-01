import Layout  from "../../../components/layout_navbar_footer";
import NextWorkLayout from "../../../components/next_works";
import WorkHeader from "../../../components/work";
import Head from "next/head";

export default function NextWorks(){
    return (
        <>
         <Head>
           <title> Works with Next.js / Neu-Gier</title>
           <meta name="description" content="This page is to introduce my programing works with Next.js. I'm Kiyohide Hayashi. I'm Japanese. I'm a full stack developer. I live in Berlin. I can use JavaScript / React.js / Next.js / Node.js / Express.js and MongoDB."/>
           </Head>
        </>
    )
}

NextWorks.getLayout = (page)=>(
    <Layout>
      <WorkHeader>
        <NextWorkLayout>
        {page}
        </NextWorkLayout>
      </WorkHeader>
    </Layout>
)