import Layout  from "../../../components/layout_navbar_footer";
import AllWorkLayout from "../../../components/all_works";
import WorkHeader from "../../../components/work";
import Head from "next/head"

export default function AllWorks(){
    return (
        <>
         <Head>
             <title>All Works / Neu-Gier</title>
         </Head>
        </>
    )
}

AllWorks.getLayout = (page)=>(
    <Layout>
        <WorkHeader>
            <AllWorkLayout>
                 {page}
            </AllWorkLayout>
        </WorkHeader>
    </Layout>
)