import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Logout({handleSession}) {
  const [status,setStatus]=useState(0);
 useEffect(()=>{
  axios.get("/user/logout").then(response=>{
      setStatus(response.status);
      handleSession(false);
  }).catch(err=>{
    setStatus(500);
  })
 })
  return (
    status!=0?
    (<div className='flex flex-col justify-center items-center mt-4'>
            <div className='w-[80px] aspect-square border-[10px] mb-4 font-semibold rounded-full border-sky-400 flex justify-center items-center text-sky-400 text-3xl'>
              <span>{status>=200 && status<300?<i class="fa-solid fa-check"></i>:<i class="fa-solid fa-xmark"></i>}</span>
            </div>
            <p className='text-center'>{status>=200 && status<300?"You have been Logged out Successfully!":"There has been an error during logging out! Please try again."}</p>
          </div>):null
  )
}
