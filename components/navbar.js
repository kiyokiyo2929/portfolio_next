import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

export default function Navbar(){
    const router = useRouter();
    console.log(router.pathname)
    const url = router.pathname.slice(1,3)
    console.log(url)

    useEffect(()=>{
        check_url()
    }, [url])

    const [work, setWork] = useState(false);
    const [about, setAbout]= useState(false);
    const [contact, setContact]= useState(false);

    const work_click = ()=>{
        setWork(true);
        setAbout(false);
        setContact(false);
    }

    const about_click = ()=>{
        setWork(false);
        setAbout(true);
        setContact(false);
    }

    const contact_click = ()=>{
        setWork(false);
        setAbout(false);
        setContact(true);
    }

　　

   const check_url = function(){
　　　　switch(url){
       case "wo":
            work_click()
            break;
        case "ab":
            about_click()
            break;
        case "co":
            contact_click()
            break;
        }
   }

    return(
        <div id="header">
            <ul id="navbar_part">
                <li onClick={work_click} className={work?"highlight":""}><Link href="/works"><a>Work</a></Link></li>
                <li onClick={about_click}  className={about?"highlight":""}><Link href="/about"><a>About</a></Link></li>
                <li onClick={contact_click} className={contact?"highlight":""}><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>
    )
}