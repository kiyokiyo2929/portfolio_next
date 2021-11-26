import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout_navbar_footer"

export default function About(){
    return(
        <>
        <Head>
            <title>About / Neu-Gier</title>
        </Head>
        <p>About</p>
        </>
    )
}

About.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
)