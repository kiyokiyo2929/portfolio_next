import useSWR from "swr";
import axios from "axios";
import Link from "next/link"

export default function NodeWorks({children}){
    const fetcher = url => axios.get(url).then(res=>res.data)
    const {data, error} = useSWR("/api/node", fetcher)
    if(error) return <div>failed to lad</div>
    if(!data) return <div>loading...</div>

    console.log(data)

    const number = data.length;
    return(
        <>
          <ul className="tab_list">
            <li><Link href="/works/all"><a>All</a></Link></li>
            <li><Link href="/works/react"><a>React</a></Link></li>
            <li><Link href="/works/next"><a>Next</a></Link></li>
            <li className="highlight"><Link href="/works/node"><a>Node</a></Link></li>
            <li><Link href="/works/mongo"><a>Mongo</a></Link></li>
          </ul>
         <h3>React Works / {number} works</h3>
         <div className="work_flex">
          <ul id="work_left" className="work_list">
            {data.map((work)=>(
                <li key={work._id}>
                    <Link href={`/works/node/${work._id}`}><a><p>{work.name}</p></a></Link>
                </li>
            ))}
         </ul>
        <main id="work_right">{children}</main>
        </div>
        </>
    )
}