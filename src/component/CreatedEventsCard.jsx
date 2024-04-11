import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import WishlistSkeleton from '../skeletons/WishlistSkeleton';
import axios from 'axios';
import dateTimeParser from '../shared/TimeParser';
export default function CreatedEventsCard({data,removeEventListner}) {
  const [eventObj,setEventObj]=useState(null);
  const [removeStatus,setRemoveStatus]=useState(-1)
  function getPathname(u)
  {
    const url=new URL(u);
    return url.pathname;
  }
  async  function handleRemove(e)
  {
    e.preventDefault();
    axios.delete(getPathname(data._links.event.href)).then(response=>{
      setRemoveStatus(response.status);
      console.log(data._links.events.href);
      removeEventListner(data._links.event.href);
      
    }
    ).catch(err=>{
      setRemoveStatus(500);
    })
  }
  function getRemoveMessage()
  {
    setTimeout(()=>{
      setRemoveStatus(-1);
    },3000);
    return <div className='rounded-lg absolute top-2 shadow-sm p-2 text-center'>Failed to remove</div>;
  }
 useEffect(()=>{
    setEventObj(data);
 },[]);
  return (
    eventObj?
    (<div className='border rounded-xl p-2 flex flex-col items-center'>
      <Link to={`${new URL(eventObj._links.event.href).pathname}`} className='grid md:grid-cols-7 md:grid-rows-1 grid-cols-4 grid-rows-3  gap-4 '>
            {removeStatus==0?getRemoveMessage():null}
            {/* This is event cover */}
            <div className=' col-span-2 row-span-2 md:row-span-1 md:col-span-1 flex flex-col'>
            <img src={"data:image/jpeg;base64, "+eventObj.event.cover} alt="Event cover" className='md:w-full sm:w-[1/2] aspect-square border rounded-md '/>
            <div className='w-full hidden md:block  mt-2'>
              <button className='w-full bg-red-400 h-10  rounded-3xl' onClick={()=>handleRemove(eventObj._links.event.href)}>Remove</button>
            </div>
            </div>
            {/*  This is event name*/}
            <div className=' col-span-2 row-span-2 flex flex-col justify-between'>
            <p className='font-bold text-xl break-all'>{eventObj.event.name}</p>
            <div className='w-full md:hidden  mt-2'>
              <button className='w-full bg-red-400 h-10  rounded-3xl' onClick={()=>handleRemove(eventObj._links.event.href)}>Remove</button>
            </div>
            </div>
           {/* This is starts */}
            <div className='col-span-2 h-fit md:h-auto'>
              <p className='font-bold text-md'>Starts:</p>
              <div>{dateTimeParser(eventObj.event.starts).map(e=>{
                return <span className='inline-block mr-1'>{e}</span>
              })}</div>
            </div>
            {/* This is ends */}
            <div className='col-span-2 h-fit md:h-auto'>
              <p className='font-bold text-md '>Ends:</p>
              <div>{dateTimeParser(eventObj.event.ends).map(e=>{
                return <span className='inline-block mr-1'>{e}</span>
              })}</div>
            </div>
            
          </Link>
          {/* Events Wishlist and Booking button */}
          <div className='grid grid-cols-2 grid-rows-1 gap-2'>
          <Link to={`/eventsbookings/${eventObj.event.id}`} className={"font-semibold flex items-center justify-center  rounded-3xl w-full h-11 py-2  px-3 bg-sky-400 text-white cursor-pointer"}>Bookings</Link>
          <Link to={`/eventswishlist/${eventObj.event.id}`} className={"font-semibold flex items-center  rounded-3xl w-fit h-11 py-2  px-3 bg-sky-400 text-white cursor-pointer"}>Wishlists</Link>
          </div>
    </div>):<WishlistSkeleton count={1}></WishlistSkeleton>
  )
}
