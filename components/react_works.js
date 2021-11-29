import useSWR from "swr";
import axios from "axios";
import Link from "next/link"

export default function ReactWorks({children}){
    const fetcher = url => axios.get(url).then(res=>res.data)
    const {data, error} = useSWR("/api/react", fetcher)
    if(error) return <div className="work_left_loading_failed">failed to lad</div>
    if(!data) return <div className="work_left_loading_failed">loading</div>

    console.log(data)

    const number = data.length;
    return(
        <> 
         <div className="work_flex">
            <div id="work_left" >
                <ul className="tab_list">
                  <li className="normal_tag tag_event"><Link href="/works/all"><a>All</a></Link></li>
                  <li className="highlight_tag"><Link href="/works/react"><a className="highlight_font">React.js</a></Link></li>
                  <li className="normal_tag tag_event"><Link href="/works/next"><a>Next.js</a></Link></li>
                  <li className="normal_tag tag_event"><Link href="/works/node"><a>Node.js</a></Link></li>
                  <li className="normal_tag tag_event"><Link href="/works/mongo"><a>MongoDB</a></Link></li>
                </ul>
                <p className="result_number">React Works / <span className="result_number_bold"> {number} </span> works</p>
                <div>
                 <ul className='work_list'>
                    {data.map((work)=>(
                      <li key={work._id}><Link href={`/works/mongo/${work._id}`}>
                        <a>
                          <div className='work_list_image_wrapper'>
                          <img src={work. image_1} className="worklist_image"/>
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