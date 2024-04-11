import React, { useState } from 'react'
import { useEffect } from 'react';
import EventsWishlistCard from './EventsWishlistCard';
import EventsWishlistCardSkeleton from '../skeletons/EventsWishlistCardSkeleton';
import { useParams } from 'react-router';
import axios from 'axios';
export default function EventsBookings() {
    const [bookings,setBookings]=useState([]);
    const {id}=useParams()
    const [status,setStatus]=useState(0);
    useEffect(()=>{
         axios.get(`/events/${id}/bookings`).then(response=>{
           setBookings(response.data._embedded.bookings);
           setStatus(response.status);
         }).catch(err=>{
           setStatus(500);
           console.log(JSON.stringify(err));
         })
       },[]);
  return <div className='p-4' >
    <h1 className='heading font-bold text-center text-2xl mb-4'>Your event's Bookings:</h1>
    {
      status>=400?( <div className='flex flex-col justify-center mt-4 items-center'>
      <div className='w-[80px] aspect-square border-[10px] mb-4 font-semibold rounded-full border-sky-400 flex justify-center items-center text-sky-400 text-3xl'>
        <span><i class="fa-solid fa-xmark"></i></span>
      </div>
      <p className='text-center'>There has been an error during fething the Bookings! Please try again.</p>
    </div>):(
        <div className='flex flex-col justify-center'>
                <div className='font-bold p-2 border rounded-md'>Total: {bookings.length}</div>
            <div className='Event-wishlist grid grid-cols-2 md:grid-cols-4 mt-4 gap-4 border rounded-lg p-2' >
                {bookings.length!=0?bookings.map((e)=>{
                    return <EventsWishlistCard data={e}></EventsWishlistCard>
                }):status==0?<EventsWishlistCardSkeleton></EventsWishlistCardSkeleton>:<div className='flex flex-col justify-center mt-4 md:col-span-4 col-span-2 items-center'>
                <div className='w-[80px] aspect-square border-[10px] mb-4 font-semibold rounded-full border-sky-400 flex justify-center items-center text-sky-400 text-3xl'>
                  <span><i class="fa-solid fa-xmark"></i></span>
                </div>
                <p className='text-center'>You haven't booked any event yet.</p>
              </div>}
        </div>
        </div>
        
      )
    }
  </div>
}
