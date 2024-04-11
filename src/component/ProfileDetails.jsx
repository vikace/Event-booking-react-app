import React from 'react'
import ProfileDetailsSkeleton from '../skeletons/ProfileDetailsSkeleton'
export default function ProfileDetails({data}) {
  return (
    <>
    <h1 className='text-center text-2xl font-bold mb-5'>Your Details</h1>
    {data?
    <div className='grid grid-cols-2 gap-4'>
        <div className='font-bold'>Name:</div>
        <div>{data.fname+" "+data.lname}</div>

        <div className='font-bold'>Email:</div>
        <div>{data.email}</div>

        <div className='font-bold'>Phone No.:</div>
        <div>{data.phoneNumber}</div>

        <div className='font-bold'>D.O.B:</div>
        <div>{data.dob}</div>

        <div className='font-bold'>Location:</div>
        <div>{data.location}</div>
    </div>:<ProfileDetailsSkeleton/>}
    </>
  )
}
