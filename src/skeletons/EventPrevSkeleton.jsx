import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function () {
  return (
<div className='flex flex-col md:flex-row'>
  <div className='coverImage md:w-1/2 lg:w-2/5 w-full flex flex-col p-5'>
    {/* ... Other content ... */}
    <div className='w-full mb-2 relative'>
      {/* Skeleton for social media icons */}
      <div className='absolute grid grid-rows-1 grid-flow-col gap-4 border bg-white after:" " p-1 text-xl rounded-lg top-2 left-2'>
        <Skeleton width={30} height={30} />
        <Skeleton width={30} height={30} />
        <Skeleton width={30} height={30} />
        <Skeleton width={30} height={30} />
      </div>
      {/* Skeleton for cover image */}
      <Skeleton height={300} />
    </div>
    {/* Skeleton for action buttons */}
    <div className='action grid grid-cols-2 font-bold gap-2'>
      <Skeleton width={200} height={40} />
      <Skeleton width={200} height={40} />
    </div>
  </div>
  <div className='eventDetails md:w-1/2 lg:w-3/5 w-full flex flex-col p-5'>
    {/* ... Other content ... */}
    <h1 className='font-bold text-4xl mb-4'>
      {/* Skeleton for event name */}
      <Skeleton width={300} height={40} />
    </h1>
    {/* Skeleton for event description */}
    <p className='mb-4'>
      <Skeleton count={5} />
    </p>
    {/* ... Other skeleton placeholders ... */}
  </div>
</div>

  )
}
