import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WishlistSkeleton from '../skeletons/WishlistSkeleton';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import FormResponse from './FormResponse';
import CreatedEventsCard from './CreatedEventsCard';

export default function CreatedEvents() {
  const [data,setData]=useState(null);
  const [createdEvent,setBooking]=useState([]);
  const [error,setError]=useState(0);
  function removeEventListner(url)
  {
    setBooking(createdEvent.filter((w)=>(w._links.event.href!==url)));
  }  
  useEffect(()=>{
     axios.get("/user/basicinfo").then(response=>{
    
      axios.get(`/users/${response.data.id}/createdEvents`).then(response=>{
        setBooking(response.data._embedded.events);
      }).catch(err=>{
        setError(500);
        console.log(JSON.stringify(err));
      })
    }).catch(err=>{
        setError(500);
    });

  },[]);
  return (
    <div>
      <h1 className='font-bold text-3xl mt-4 text-center'>Your created Event</h1>
      <div className='createdEvent-cont p-4 grid grid-cols-1 gap-4 '>
      {
        createdEvent.length!=0?createdEvent.map((e)=>{
          return (<CreatedEventsCard data={e} removeEventListner={removeEventListner}></CreatedEventsCard>)
        }):error==500?<FormResponse></FormResponse>:<WishlistSkeleton count={5}></WishlistSkeleton>
      }        
      </div>
        
    </div>
  )
}
