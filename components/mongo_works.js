import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function MongoWorks({children}){
    const fetcher = url => axios.get(url).then(res=>res.data)
    const {data, error} = useSWR("/api/mongo", fetcher)
    if(error) return <div className="work_left_loading_failed">failed to load</div>
    if(!data) return <div className="work_left_loading_failed">loading</div>


    const number = data.length;
    return(
        <>
         <div className="work_flex">
           <div id="work_left">
          <ul className="tab_list">
            <Link href="/works/all"><li className="normal_tag tag_event"><a>All</a></li></Link>
            <Link href="/works/react"><li className="normal_tag tag_event"><a>React.js</a></li></Link>
            <Link href="/works/next"><li className="normal_tag tag_event"><a>Next.js</a></li></Link>
            <Link href="/works/node"><li className="normal_tag tag_event"><a>Node.js</a></li></Link>
            <Link href="/works/mongo"><li className="highlight_tag"><a className="highlight_font">MongoDB</a></li></Link>
          </ul>
         <p className="result_number">Works with MongoDB / <span className="result_number_bold">{number} </span> works</p>
        

            <div>
            <ul className='work_list'>
              {data.map((work)=>(
                 <li key={work._id}><Link href={`/works/mongo/${work._id}`}>
                         <a>
                            <div className='work_list_image_wrapper'>
                            <Image src={work. image_1} width={1000} height={550} className="worklist_image" style="border: solid 1px black"/>
                            <h3>{work.name}</h3>
                            </div>
                        </a>
                </Link>
                </li>
              ))}
             </ul>
            </div>
          </div>
         <main id="work_right">{children}</main>
        </div>
        </>
    )
}