import Head from 'next/head'
import clientPromise from '../lib/mongodb';
import Layout from '../components/layout_navbar_footer';


export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Top Page / Neu-Gier </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
         <div className="top_page_parent">
        <p className="top_page_new_effect anim-typewriter">Hallo, World.  I'm a full stack developer.</p>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const client = await clientPromise

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}

Home.getLayout = (page)=>(
  <Layout>
      {page}
  </Layout>
)