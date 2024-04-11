import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
export default function EventsWishlistCardSkeleton() {
  return (
    <div className='grid grid-rows-2 grid-cols-4 p-2 border gap-1'>
                <Skeleton width={32} height={32} circle/>
                <Skeleton className=' col-span-3'></Skeleton>
                <Skeleton className='col-span-4'></Skeleton>
    </div>
  )
}
