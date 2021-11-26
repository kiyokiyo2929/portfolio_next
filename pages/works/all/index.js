import Layout  from "../../../components/layout_navbar_footer";
import AllWorkLayout from "../../../components/all_works"
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
        <AllWorkLayout>
        {page}
        </AllWorkLayout>
    </Layout>
)