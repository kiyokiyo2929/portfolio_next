import React, {useState, useEffect } from "react";

export default function Work({children}){
 const [effect, setEffect] = useState(false);

    useEffect(()=>{
        setEffect(true)
    }, [])

 return(
     <>
     <div id="parent_work">
        <div className="header_font">
            <h2 className={`page_header ${effect?"page_header_effect":""}`}>Work</h2>
        </div>
        <div id="child_work">{children}</div>
     </div>
    </>
 )
}