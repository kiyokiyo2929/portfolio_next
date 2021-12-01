import clientPromise from "../../../lib/mongodb";
import Head from "next/head"
import React, {useState, useEffect} from 'react';

import Layout from "../../../components/layout_navbar_footer";
import ReactWorks from "../../../components/react_works";
import WorkHeader from "../../../components/work";

const ObjectId = require('mongodb').ObjectID;

export default function EachWork(work){

    const [image1, setImage1] = useState(true);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [mobile, setMobile] = useState(false);


    const image1_click =()=>{
        setImage1(true);
        setImage2(false);
        setImage3(false);
        setButton1(true);
        setButton2(false);
        setButton3(false);
    }
    const image2_click =()=>{
        setImage1(false);
        setImage2(true);
        setImage3(false);
        setButton1(false);
        setButton2(true);
        setButton3(false);
    }
    const image3_click =()=>{
        setImage1(false);
        setImage2(false);
        setImage3(true);
        setButton1(false);
        setButton2(false);
        setButton3(true);
    }

    const mobile_click =()=>{
        setMobile(false);
    }

    useEffect(()=>{
        image1_click();
        setMobile(true);
    }, [work])

    return(
        <>
         <Head><title>{work.work.name} / New-Gier</title></Head>
         <div className="detail_page">
                <h2 className="detail_headline">{work.work.name}</h2>
 
                <div className="detail_flex">
                        <p className="detail_title">Technologies</p>
                        <p className="technologies">{work.work.technologies}</p>
                </div>
                <div className="detail_flex">
                        <p className="detail_title">Web-site</p>
                        <a href={work.work.link} className="work_detail_web"><p>{work.work.name}</p></a>
                </div>
                <div className="detail_flex">
                        <p className="detail_title">Repositories</p>
                        {work.work.repositories?
                        <a href={work.work.repositories}><p>{work.work.repositories}</p></a>:<></>}
                </div>

                <div  className="image_wrapper_in_detail">
                <div className="button_flex">
                    <div onClick={image1_click} className={button1?"button_highlight":"button_for_screen_shot"}></div>
                    <div onClick={image2_click} className={button2?"button_highlight":"button_for_screen_shot"}></div>
                    <div onClick={image3_click} className={button3?"button_highlight":"button_for_screen_shot"} id="last_button"></div>
                </div>
                     <div>
                        {image1?<img src={work.work.image_1} className="screen_shot"/>:<></>}
                     </div>
                     <div>
                         {image2?<img src={work.work.image_2} className="screen_shot"/>:<></>}
                      </div>
                     <div>
                         {image3?<img src={work.work.image_3} className="screen_shot"/>:<></>}
                     </div>
                   
                </div>
         </div>

         <div className={`mobile_detail_page ${mobile?"mobile_detail_on":"mobile_detail_off"}`}>
            <div id="mobile_detail_part">
                <p id="mobile_detail_btn" onClick={mobile_click}>x</p>
                <h2 className="detail_headline">{work.work.name}</h2>
 
                <div className="detail_flex">
                        <p className="detail_title">Technologies</p>
                        <p className="technologies">{work.work.technologies}</p>
                </div>
                <div className="detail_flex">
                        <p className="detail_title">Web-site</p>
                        <a href={work.work.link} className="work_detail_web"><p>{work.work.name}</p></a>
                </div>
                <div className="detail_flex">
                        <p className="detail_title">Repositories</p>
                        {work.work.repositories?
                        <a href={work.work.repositories}><p>{work.work.repositories}</p></a>:<></>}
                </div>
                <div  className="image_wrapper_in_detail">
                <div className="button_flex">
                    <div onClick={image1_click} className={button1?"button_highlight":"button_for_screen_shot"}></div>
                    <div onClick={image2_click} className={button2?"button_highlight":"button_for_screen_shot"}></div>
                    <div onClick={image3_click} className={button3?"button_highlight":"button_for_screen_shot"} id="last_button"></div>
                </div>
                    <div>
                        {image1?<img src={work.work.image_1} className="screen_shot"/>:<></>}
                     </div>
                     <div>
                         {image2?<img src={work.work.image_2} className="screen_shot"/>:<></>}
                      </div>
                     <div>
                         {image3?<img src={work.work.image_3} className="screen_shot"/>:<></>}
                     </div>
                </div>
            </div>
         </div>
        </>
    )
}

export async function getServerSideProps({params}){
    const id = params.react;
    const client = await clientPromise;
    const db = client.db("myFirstDatabase");
    const data = await db.collection("portfolios").findOne({"_id":ObjectId(id)})
    const work = JSON.parse(JSON.stringify(data));

    return {
        props:{work}
    }
}

EachWork.getLayout=(page)=>(
    <Layout>
        <WorkHeader>
          <ReactWorks>
           {page}
          </ReactWorks>
        </WorkHeader>
    </Layout>
)