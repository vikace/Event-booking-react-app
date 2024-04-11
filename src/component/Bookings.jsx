import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WishlistSkeleton from '../skeletons/WishlistSkeleton';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import BookingsCard from './BookingsCard';
import FormResponse from './FormResponse';

export default function Bookings() {
  const [data,setData]=useState(null);
  const [booking,setBooking]=useState([]);
  const [error,setError]=useState(0);
  function removeEventListner(url)
  {
    setBooking(booking.filter((w)=>(w._links.booking.href!==url)));
  }  
  useEffect(()=>{
     axios.get("/user/basicinfo").then(response=>{
    
      axios.get(`/users/${response.data.id}/bookings`).then(response=>{
        setBooking(response.data._embedded.bookings);
      }).catch(err=>{
        setError(500);
        console.log(JSON.stringify(err));
      })
    }).catch(err=>{
        setError(500);
    });

  },[]);
  return (
    <div >
      <h1 className='font-bold text-3xl mt-4 text-center'>Your booking</h1>
      <div className='booking-cont p-4 grid grid-cols-1 gap-4 '>
      {
        booking.length!=0?booking.map((e)=>{
          return (<BookingsCard data={e} removeEventListner={removeEventListner}></BookingsCard>)
        }):error==500?<FormResponse></FormResponse>:<WishlistSkeleton count={5}></WishlistSkeleton>
      }        
      </div>
    </div>
  )
}
