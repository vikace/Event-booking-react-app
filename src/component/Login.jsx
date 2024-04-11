import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

export default function Login({handleSession}) {
  const [data,setData]=useState({});
  const [status,setStatus]=useState(0);
  const navigate=useNavigate();
  function handleInputChange(e)
  {
    const {name,value}=e.target;

    setData({...data,[name]:value});
  }
  async function handleSubmit(e)
  {
    e.preventDefault();
    var header={}
    
   await axios.post("/user/login",data).then((response)=>{
    
      setStatus(response.status);
      
    }).catch((error)=>{
      console.log(JSON.stringify(error));
      setStatus(error.code==="ERR_BAD_REQUEST"?400:401);
    });
    
  }
  console.log(status);
  if(status>=200&&status<300)
  {
    handleSession(true);
    navigate('/');
  }
  
  return (
    <div className='p-2'>
      
      {/* Heading */}
      <div className='heading flex justify-center mb-4'><h1 className='font-bold text-2xl'>Create new account</h1></div>
      {/* Form */}
      <div className='form flex justify-center '>
        <div className=' sm:w-3/5 w-full lg:w-1/2 shadow-lg rounded-2xl p-3'>
          {status>=400&&status<500?<p className='text-red-400 text-center p-4'>Wrong Email or Password!</p>:null}
        <form  onSubmit={(e)=>{handleSubmit(e)}} className='w-full grid  grid-cols-2  gap-4'>
            
          
            <div className='relative col-span-2 '>
              <label htmlFor="email" className='absolute top-1 left-5 text-xs font-semibold '>Email</label>
              <input type="email" name='email' id='email' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-envelope"></i></span>
            </div>

            <div className='relative col-span-2 '>
              <label htmlFor="password" className='absolute top-1 left-5 text-xs font-semibold '>Password</label>
              <input type="password" name='password' id='password' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-lock"></i></span>
            </div>
            <div className='relative flex items-center col-span-1 '>
             
              <input type="checkbox" name='remember' id='remember' onChange={(e)=>handleInputChange(e)} className=' '/>
              <label htmlFor="remember" className='inline-block ml-2 font-semibold '>Remember me</label>
            </div>
            <div className='relative  col-span-1 text-right  '>
             <a href="" className='hover:text-sky-400   underline'>Forgot password ?</a>
            </div>
            <div className='col-span-2 flex justify-center'>
              <input type="submit" value={"Login"}  className=" cursor-pointer py-2 px-3 w-full h-14 border rounded-2xl font-semibold focus:border-sky-400 bg-sky-400 text-white outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200" />
            </div>
            
          </form>
        </div>
      </div>
      
    </div>
  )
}
