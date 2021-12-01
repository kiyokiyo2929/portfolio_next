import Layout  from "../../../components/layout_navbar_footer";
import AllWorkLayout from "../../../components/all_works";
import WorkHeader from "../../../components/work";
import Head from "next/head"

export default function AllWorks(){
    return (
        <>
         <Head>
             <title>All Works / Neu-Gier</title>
             <meta name="description" content="This page is to introduce my programing works. I'm Kiyohide Hayashi. I'm Japanese. I'm a full stack developer. I live in Berlin. I can use JavaScript / React.js / Next.js / Node.js / Express.js and MongoDB."/>
         </Head>
        </>
    )
}

AllWorks.getLayout = (page)=>(
    <Layout>
        <WorkHeader>
            <div>
              <AllWorkLayout>
                 <div> {page} </div>
              </AllWorkLayout>
            </div>
        </WorkHeader>
    </Layout>
)