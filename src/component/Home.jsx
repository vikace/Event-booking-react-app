import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react';
import Section from './Section';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default function Home() {
  const [corouselImg,setCorouselImg]=useState([]);
  const [noi,setNoi]=useState(0);
  const [currentCorouselImg,setCurrentCorouselImg]=useState(0);
  const [features,setFeatures]=useState([0,0,0,0]);
  
  var bodyRef=useRef(null);
    
  function handleCorouselDec()
  {
    setCurrentCorouselImg((currentCorouselImg-1+noi)%noi);
  }
  function handleCorouselInc()
  {
    setCurrentCorouselImg((currentCorouselImg+1)%noi);
  }

  useEffect(()=>
  {
    
       axios.get('/carousels').then((response)=>{
         var array=response.data._embedded.carousels.map(e=>"data:image/jpeg;base64, "+e);
         setCorouselImg(array);
         setNoi(response.data._embedded.carousels.length);   
         
       }).catch((error=>{
         
       }));
     
  },[]);
  useEffect(()=>{
    axios.get('/features').then((response)=>{
      setFeatures(response.data._embedded.features);
    }).catch((error)=>{});
  },[]);
  
  return (
   <div ref={bodyRef} className='px-2 py-2'>
    <div className='cont grid grid-cols-4 md:grid-rows-2 grid-rows-4  gap-2 md:h-[300px] h-[600px] p-2'>
      <div className='corousel relative md:col-span-2 col-span-4 row-span-2 rounded-3xl overflow-clip bg-sky-400' >
       <span className='inline-block cursor-pointer absolute left-0 p-2 bg-white/50 text-white top-1/2 -translate-y-1/2 z-10' onClick={handleCorouselDec}><i class="fa-solid fa-angle-left"></i></span>
       {noi!==0?corouselImg.map((e,i)=>{
         return <Link to={`event/${e.eventId}`}  ><img src={"data:image/jpeg;base64, "+e.cover} key={'corousel'+i} alt='corousel image' className={currentCorouselImg==i?'w-full h-full transition-all absolute left-0 ':'h-full w-0 absolute left-0 z-50'}></img></Link>
       }):null}
       <span className='inline-block cursor-pointer absolute right-0 p-2 bg-white/50 text-white top-1/2 -translate-y-1/2 z-10' onClick={handleCorouselInc}><i class="fa-solid fa-angle-right"></i></span>
      </div>
       {features.map((e,i)=>{
       return (<div className='bg-orange-400 col-span-2 md:col-span-1 rounded-3xl overflow-clip relative'>{e?<Link to={{pathname:"/events",search:`category=${e?e.category:null}`}}><img src={"data:image/jpeg;base64, "+e.cover} alt='Feature' className='w-full h-full'></img>
       <p className='font-semibold bg-white/70 absolute  text-center bottom-0 w-full left-1/2  -translate-x-1/2'>{e.title}</p></Link>:null}</div>)
       })}
      
    </div>
    
    <Section data={{heading:"Trending Events",uri:"trending"}}/>
    <Section data={{heading:"Recommended Events",uri:"recommended"}}/>
    <Footer/>
      </div>
 
   
  );
}
