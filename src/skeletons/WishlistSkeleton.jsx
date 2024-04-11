import React from 'react'
import Skeleton from 'react-loading-skeleton'
export default function WishlistSkeleton(props) {
    
  return (
    Array(props.count).fill(0).map(e=>{
        return <div  className='grid md:grid-cols-7 md:grid-rows-1 grid-cols-4 grid-rows-3   border rounded-xl p-2 gap-4 '>
        <div className=' col-span-2 row-span-2 md:row-span-1 md:col-span-1 flex flex-col'>
            <Skeleton className='md:w-full sm:w-[1/2] aspect-square border rounded-md '/>
        <div className='w-full hidden md:block mt-2'>
          <Skeleton className='w-full bg-red-400 h-10  ' borderRadius={8} />
        </div>
        </div>
        <div className=' col-span-2 row-span-2 flex flex-col justify-between'>
        <p ><Skeleton count={4}></Skeleton></p>
        <div className='w-full md:hidden  mt-2'>
        <Skeleton className='w-full bg-red-400 h-10  rounded-lg' />
        </div>
        </div>
       
        <div className='col-span-2 h-fit md:h-auto'>
          <Skeleton width={60}></Skeleton>
          <Skeleton></Skeleton>

        </div>
        <div className='col-span-2 h-fit md:h-auto'>
          <Skeleton width={60}></Skeleton>
          <Skeleton></Skeleton>

        </div>
      </div>
    })
  )
}
