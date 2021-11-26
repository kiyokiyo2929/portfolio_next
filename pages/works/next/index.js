import Layout  from "../../../components/layout_navbar_footer";
import NextWorkLayout from "../../../components/next_works";
import Head from "next/head";

export default function NextWorks(){
    return (
        <>
         <Head><title> Works with Next.js / Neu-Gier</title></Head>
        </>
    )
}

NextWorks.getLayout = (page)=>(
    <Layout>
        <NextWorkLayout>
        {page}
        </NextWorkLayout>
    </Layout>
)