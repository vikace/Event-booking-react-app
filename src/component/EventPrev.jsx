import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import dateTimeParser from '../shared/TimeParser';
import EventPrevSkeleton from '../skeletons/EventPrevSkeleton';
export default function EventPrev() {
  var {id}=useParams();
  const query=useLocation();
  const [data,setData]=useState(null);
  const [status,setStatus]=useState(0);
  const [regStatus,setRegStatus]=useState("");
  const [wishStatus,setWishStatus]=useState("");
  async function wishlistHandler()
  {

     axios.post("/wishlists",{"event":data._links.event.href,"time":new Date().toISOString().replace("T"," ").split(".")[0]}).then(response=>{
      response.status>=200&&response.status<300?setWishStatus("success"):setWishStatus("failed");
     }).catch(err=>{
      setWishStatus("failed");
     });
  }
  async function registerHandler()
  {
    axios.post("/bookings",{"event":data._links.event.href,"time":new Date().toISOString().replace("T"," ").split(".")[0]}).then(response=>{
      response.status>=200&&response.status<300?setRegStatus("success"):setRegStatus("failed");
    }).catch(err=>{
      setRegStatus("failed");
    });
    
  }
  
  useEffect(()=>{
    
    if(id)
    {
      
        axios.get(`/events/${id}`).then(response=>{
          setData(response.data);
          setStatus(response.data.status);
        }).catch(err=>{
          console.log("Event Prev error"+JSON.stringify(err));
            setStatus(500);
        });
    }
    
    else
    {
      setStatus(404);
    }
  },[]);
  if(status>=400)
  {
    return (<div className='flex flex-col justify-center items-center'>
    <div className='w-[80px] aspect-square border-[10px] mb-4 font-semibold rounded-full border-sky-400 flex justify-center items-center text-sky-400 text-3xl'>
      <span><i class="fa-solid fa-xmark"></i></span>
    </div>
    <p className='text-center'>The Event that you are looking for is not found.</p>
  </div>)
  }
  return (
    data?
      (<div className='flex flex-col md:flex-row'>
        <div className='coverImage md:w-1/2 lg:w-2/5 w-full flex flex-col p-5  '>
          
         <div className='w-full mb-2 relative'>
         <div className='absolute grid grid-rows-1 grid-flow-col gap-4 border bg-white after:" " p-1 text-xl rounded-lg top-2 left-2'>
            {data.event?data.event.instagram?<a className='instagram hover:text-sky-400' href={data.event.instagram} target="_blank"><i class="fa-brands fa-instagram"></i></a>:null:null}
            {data.event?data.event.facebook?<a className='facebook hover:text-sky-400' href={data.event.facebook} target="_blank"><i class="fa-brands fa-facebook"></i></a>:null:null}
            {data.event?data.event.twitter?<a className='twitter hover:text-sky-400' href={data.event.twitter} target="_blank"><i class="fa-brands fa-twitter"></i></a>:null:null}
            {data.event?data.event.website?<a className='website hover:text-sky-400' href={data.event.website} target="_blank"><i class="fa-solid fa-globe"></i></a>:null:null}
          </div>
          <img src={"data:image/jpeg;base64, "+data.event.cover} alt="event cover image" className='w-full aspect-[1/1] ' />
          </div> 
          <div className='action grid grid-cols-2 font-bold gap-2 '>
            <div className='w-full'><button className={(wishStatus==="success"?"cursor-not-allowed opacity-50":null)+' w-full bg-yellow-400 h-12  rounded-lg'} onClick={()=>{setWishStatus("clicked");wishlistHandler();}}>{wishStatus?wishStatus==="success"?"Wishlisted Successfully":wishStatus==="clicked"?<i class="fa-solid fa-spinner fa-spin"></i>:"Failed to Wishlist":"Add to Wishlist"}</button></div>
            <div className='w-full rounded-lg'><button className={(regStatus==="success"?"cursor-not-allowed opacity-50":null)+' w-full bg-blue-400 h-12  rounded-lg'} onClick={()=>{setRegStatus("clicked");registerHandler();}}>{regStatus?regStatus==="success"?"Registered Successfully":regStatus==="clicked"?<i class="fa-solid fa-spinner fa-spin"></i>:"Registeration Failed":"Register"}</button></div>
          </div>
        </div>
        <div className='eventDetails md:w-1/2 lg:w-3/5 w-full flex flex-col p-5'>
          <h1 className='font-bold text-4xl mb-4'>{data.event?data.event.name:null}</h1>
          <p className='mb-4'>{data.event?data.event.description:null}</p>
          <div className='duration text-center grid grid-rows-2 gap-2 lg:w-4/5 w-full mb-4'>
            <div className='starts grid grid-cols-3 border rounded-xl h-[80px]'>
              <p className='font-bold text-xl flex items-center justify-center'>Starts At:</p>
              {data.event?dateTimeParser(data.event.starts).map((e)=>{
               return <div className='time text-xl font-bold flex items-center justify-center'>{e}</div>
                
              }):["--/--/----","00:00:00"]}
            </div>
            <div className='starts grid grid-cols-3 border rounded-xl'>
              <p className='font-bold text-xl flex items-center justify-center'>Ends At:</p>
              {data.event?dateTimeParser(data.event.ends).map((e)=>{
               return <div className='time text-xl font-bold flex items-center justify-center'>{e}</div>
                
              }):["--/--/----","00:00:00"].map(e=>{
                return <span>{e}</span>
              })}
            </div>
            
          </div>
          <div className='flex flex-col gap-2 lg:w-4/5 w-full mb-4'>
            <h1 className='font-bold'>Location:</h1>
            <p>{data.event?data.event.location:null}</p>
          </div>
          <div className='grid grid-cols-2 gap-2 lg:w-4/5 w-full mb-4'>
            <div className='category '>
              <span className='font-bold'>Category:</span> {data.event?data.event.category:null}
            </div>
            <div className='ageLimit '>
            <span className='font-bold'>Age limit:</span> {data.event?data.event.maxAge:null}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2 lg:w-4/5 w-full mb-4'>
            <div className='category '>
              <span className='font-bold'>Views:</span> {data.event?data.event.views:null}
            </div>
            <div className='ageLimit '>
            <span className='font-bold'>Total Registeration:</span> {data.event?data.event.occupied:null} / {data.event?data.event.capacity:null}
            </div>
          </div>
          
        </div>
      </div>):<EventPrevSkeleton></EventPrevSkeleton>
  )
}
