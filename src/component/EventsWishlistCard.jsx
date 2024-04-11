import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EventsWishlistCardSkeleton from '../skeletons/EventsWishlistCardSkeleton';

export default function EventsWishlistCard({data}) {
    function getPathname(url)
    {
        return new URL(url).pathname;
    }
    const [userObj,setUserObj]=useState(null);
    useEffect(()=>{
        axios.get(getPathname(data._links.user.href)).then(response=>{
            setUserObj(response.data);
        });
    },[])
  return (
    userObj?
    <div className='grid grid-rows-2 grid-cols-4 p-2 border gap-1 rounded-lg'>
                <img src={"data:image/jpeg;base64, "+userObj.user.pfp} alt="pfp"  className='w-10 aspect-square rounded-full'/>
                <p className='font-bold col-span-3 flex items-center'>{userObj.user.fname+" "+userObj.user.lname}</p>
                <p className='font-semibold text-gray-500 col-span-4 flex items-center '>Time:   {data.time}</p>
    </div>:<EventsWishlistCardSkeleton></EventsWishlistCardSkeleton>
  )
}
