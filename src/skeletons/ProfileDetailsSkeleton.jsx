import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function ProfileDetailsSkeleton({edit}) {
  return (
    <div className='grid grid-cols-2 gap-2'>
        <Skeleton count={5}/>
        {edit?<div className='flex col-span-2 justify-center' >
          <div className="  py-2 px-3 w-[30%] h-14 border "><Skeleton borderRadius={16} /></div>
          </div>:null}
    </div>
  )
}
