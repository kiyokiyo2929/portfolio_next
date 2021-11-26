import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout_navbar_footer"

export default function Contact(){
    return(
        <>
        <Head>
            <title> Contact / Neu-Gier </title>
        </Head>
        <p>Contact</p>
        </>
    )
}

Contact.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
)