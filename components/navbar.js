import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

export default function Navbar(){
    const router = useRouter();
    const url = router.pathname.slice(1,3)


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
                <li  className={work?"highlight_nav":"normal_nav"}><Link href="/works"><a>Work</a></Link></li>
                <li  className={about?"highlight_nav":"normal_nav"}><Link href="/about"><a>About</a></Link></li>
                <li  className={contact?"highlight_nav":"normal_nav"}><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>
    )
}