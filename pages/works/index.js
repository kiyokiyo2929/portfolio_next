import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout_navbar_footer"

export default function Works(){
    return(
        <>
        <Head>
            <title>Work / Neu-Gier</title>
        </Head>
        <ul>
            <li>
                <Link href="/works/all"><a>All</a></Link>
            </li>
            <li>
                <Link href="/works/react"><a>React</a></Link>
            </li>
            <li>
                <Link href="/workks/next"><a>Next</a></Link>
            </li>
            <li>
                <Link href="/workks/node"><a>Node</a></Link>
            </li>
            <li>
                <Link href="/workks/mongo"><a>Mongo</a></Link>
            </li>
        </ul>
        </>
    )
}

Works.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
)