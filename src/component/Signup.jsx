import React from 'react'
import axios from 'axios';
import { useState } from 'react';
export default function Signup() {
  const [data,setData]=useState({});
  const [status,setStatus]=useState(0);
  function handleInputChange(e)
  {
    var {name,value}=e.target;
    value=name==='password'?value:value.toLowerCase();
    setData({...data,[name]:value});
  }
  function handleSubmit(e)
  {
    e.preventDefault();
    
    console.log(JSON.stringify(data));
    axios.post("/users",data).then((response)=>{
      setStatus(response.status);
    }).catch((error)=>{
      setStatus(error.status);
    })
  }
  return (
    <div className='p-2'>
      {/* Heading */}
      <div className='heading flex justify-center mb-4'><h1 className='font-bold text-2xl'>Create new account</h1></div>
      {/* Form */}
      <div className='form flex justify-center '>
        <div className=' sm:w-3/5 w-full lg:w-1/2 shadow-lg rounded-2xl p-3'>

        {status===0?<form  onSubmit={(e)=>{handleSubmit(e)}} className='w-full grid  grid-cols-2  gap-4'>
            <div className='relative col-span-2 '>
              <label htmlFor="fname" className='absolute top-1 left-5 text-xs font-semibold '>First name</label>
              <input required type="text" name='fname' id='fname' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-user"></i></span>
            </div>
            
            <div className='relative col-span-2 '>
              <label htmlFor="lname" className='absolute top-1 left-5 text-xs font-semibold '>Last name</label>
              <input required type="text" name='lname' id='lname' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-user"></i></span>
            </div>

            <div className='relative col-span-2 '>
              <label htmlFor="email" className='absolute top-1 left-5 text-xs font-semibold '>Email</label>
              <input required type="email" name='email' id='email' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-envelope"></i></span>
            </div>

            <div className='relative col-span-2 '>
              <label htmlFor="password" className='absolute top-1 left-5 text-xs font-semibold '>Password</label>
              <input required type="password" name='password' id='password' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-lock"></i></span>
            </div>

            <div className='relative col-span-1'>
              <label htmlFor="dob" className='absolute top-1 left-5 text-xs font-semibold '>D.O.B</label>
              <input required type="date" name='dob' id='dob' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-4 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              
            </div>

            
            <div className='relative col-span-1 '>
              <label htmlFor="location" className='absolute top-1 left-5 text-xs font-semibold '>Location</label>
              <input required type="text" name='location' id='location' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-location-dot"></i></span>
            </div>

            <div className='col-span-2 flex justify-center'>
              <input type="submit" value={"Sign up"}  className=" cursor-pointer py-2 px-3 w-full h-14 border rounded-2xl font-semibold focus:border-sky-400 bg-sky-400 text-white outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200" />
            </div>
          </form>:<div className='flex flex-col justify-center items-center'>
            <div className='w-[80px] aspect-square border-[10px] mb-4 font-semibold rounded-full border-sky-400 flex justify-center items-center text-sky-400 text-3xl'>
              <span>{status>=200 && status<300?<i class="fa-solid fa-check"></i>:<i class="fa-solid fa-xmark"></i>}</span>
            </div>
            <p className='text-center'>{status>=200 && status<300?"Your account has been created Successfully! Kindly login.":"There has been an error during account creation! Please try again."}</p>
          </div>}
        </div>
      </div>
      
    </div>
  )
}
