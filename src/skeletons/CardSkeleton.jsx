import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
export default function CardSkeleton(props) {
  return (
    Array(props.count).fill(0).map(e=>{
        return (<div className={props.classes+' shrink-0 mx-[1.5%] sm:w-[30.33%] w-[47%] rounded-3xl inline-block  lg:w-[22%] aspect-[1/1.5] p-2 border  '}>
        <div className='flex flex-col relative'>
        <Skeleton  className='w-full border aspect-[1/1] ' borderRadius={24} />
            <div className='grow grid grid-cols-2 grid-row-4 gap-2'>
                <div className='col-span-1 row-span-2 flex  items-center'>
                    <Skeleton circle containerClassName='flex-1' width={40} height={40}/>
                </div>
                <p><Skeleton width={60}></Skeleton></p>
                <p ><Skeleton></Skeleton></p>
                <div className='col-span-2 row-span-1'><p><Skeleton width={60}></Skeleton></p></div>
                <div className='col-span-2 md:font-bold font-medium grid grid-cols-2 gap-2'>
                  <Skeleton></Skeleton>
                  <Skeleton></Skeleton>
                </div>
            </div>
        </div>
    </div>)
    })
    
  )
}
