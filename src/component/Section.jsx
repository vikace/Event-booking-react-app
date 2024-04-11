import React from 'react';
import Card from './Card';
import axios from 'axios';
import { useRef,useEffect,useState } from 'react';
export default function Section({data}) {
  var slideRef=useRef(null);
  var windowRef=useRef(null);
  var count=useRef(window.innerWidth>=1024?1:0);
  const [translate,setTranslate]=useState(0); 
  const [cardData,setCardData]=useState([]);
  function getTemplate(n)
  {
    var arr=[]
    for(var i=0;i<n;i++)
    {
      arr.push(<Card data={null}/>);
    }
    return arr;
  }
  function handleTrendingDec()
  {
    if(translate<0)
   setTranslate(translate+100);
  }
  function handleTrendingInc()
  {
    if(translate>-100)
    setTranslate(translate-100);
  }
  
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      
      if(window.innerWidth>=1024&&count.current==1)
      {
        count.current=0;
        
      }
      if(window.innerWidth<1024&&count.current==0)
      {
        count.current=1;
        setTranslate(0);
       
      }
    },[]);
  });   
  useEffect(()=>{
    axios.get("/"+data.uri).then((response)=>{
      setCardData(response.data);
    }).catch((error)=>{
      
    })
  })
  return (
    <div className='p-2'><div className='card-section'>
    <div className='flex justify-between mt-2 mb-2'>
    <h1 className='ml-[1.5%] font-semibold px-2'>{data.heading}</h1>
    <a href="" className='mr-[1.5%] inline-block px-2 underline'>show more</a>
   </div>
 </div>
 <div ref={windowRef}  className='window max-w-[100%] relative lg:overflow-hidden overflow-auto web'>
 <span className='hidden w-[1.5%] h-full rounded-3xl lg:flex items-center cursor-pointer absolute left-0 p-1  hover:bg-sky-400 font-semibold text-black hover:text-white top-1/2 -translate-y-1/2 z-10' onClick={handleTrendingDec}><i class="fa-solid fa-angle-left"></i></span>
 
 <div style={{"transform":"translateX("+translate+"%)"}} ref={slideRef} className='slide  flex flex-row flex-nowrap  last:mr-0 transition-all '  >
      {cardData.map((e)=>{
        return <Card data={e}/>
      })}
      {
        getTemplate(8-cardData.length)
      }  
 </div>
 <span className='hidden w-[1.5%] h-full rounded-3xl lg:flex items-center cursor-pointer absolute right-0 p-1  hover:bg-sky-400 font-semibold text-black hover:text-white top-1/2 -translate-y-1/2 z-10' onClick={handleTrendingInc}><i class="fa-solid fa-angle-right"></i></span>
 </div></div>
  )
}
