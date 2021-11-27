import useSWR from "swr";
import axios from "axios";
import Link from "next/link"

export default function ReactWorks({children}){
    const fetcher = url => axios.get(url).then(res=>res.data)
    const {data, error} = useSWR("/api/react", fetcher)
    if(error) return <div>failed to lad</div>
    if(!data) return <div>loading...</div>

    console.log(data)

    const number = data.length;
    return(
        <> 
          <ul>
            <li><Link href="/works/all"><a>All</a></Link></li>
            <li className="highlight"><Link href="/works/react"><a>React</a></Link></li>
            <li><Link href="/works/next"><a>Next</a></Link></li>
            <li><Link href="/works/node"><a>Node</a></Link></li>
            <li><Link href="/works/mongo"><a>Mongo</a></Link></li>
          </ul>
         <h3>React Works / {number} works</h3>
          <ul>
            {data.map((work)=>(
                <li key={work._id}>
                    <Link href={`/works/react/${work._id}`}><a><p>{work.name}</p></a></Link>
                </li>
            ))}
         </ul>
        <main>{children}</main>
        </>
    )
}