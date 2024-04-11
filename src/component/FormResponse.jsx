import React from 'react'

export default function FormResponse({status}) {
    
  return (
    <div className='flex flex-col justify-center items-center'>
            <div className='w-[80px] aspect-square border-[10px] mb-4 font-semibold rounded-full border-sky-400 flex justify-center items-center text-sky-400 text-3xl'>
              <span>{status>=200 && status<500?<i class="fa-solid fa-check"></i>:<i class="fa-solid fa-xmark"></i>}</span>
            </div>
            <p className='text-center'>{status>=200 && status<300?"The Event has been created Successfully! Check Profile for more details.":"There has been an error during event creation! Please try again."}</p>
          </div>
  )
}
