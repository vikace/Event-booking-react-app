import React from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function() {
  const [data,setData]=useState({});
  const [status,setStatus]=useState(0);
  function handleInputChange(e)
  {
    var {name,value}=e.target;

    if(name==='cover')
    {
      var file=e.target.files[0];
      file.arrayBuffer().then(value=>{
        const bytes=new Uint8Array(value);
        setData({...data,[name]:[...bytes]});
      });  
      
      
    }
    else if(name==='ends'||name==='starts')
    {
      value=value.replace("T"," ")+":00";
      setData({...data,[name]:value});
    }
    else
    {setData({...data,[name]:value});}
  }
  function handleSubmit(e)
  {
    e.preventDefault();
    console.log(data);
    axios.post("/events",data).then((response)=>{
      setStatus(response.status);
    }).catch((error)=>{
      setStatus(error.status);
    })
  }
  
  return (
    <div className='p-2'>
      {/* Heading */}
      <div className='heading flex justify-center mb-4'><h1 className='font-bold text-2xl'>Create new event</h1></div>
      {/* Form */}
      <div className='form flex justify-center '>
        <div className='xl:w-3/5   sm:w-4/5 w-full shadow-lg rounded-2xl p-3'>

        {status===0?<form  onSubmit={(e)=>{handleSubmit(e)}} className='w-full grid lg:grid-cols-4  lg:grid-rows-6 grid-cols-2  gap-4' encType='multipart/form-data'>
            <div className='relative col-span-2 '>
              <label htmlFor="name" className='absolute top-1 left-5 text-xs font-semibold '>Name</label>
              <input type="text" name='name' id='name' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-user"></i></span>
            </div>
            
            <div className='relative col-span-1 gap-2'>
              <label htmlFor="maxage" className='absolute top-1 left-5 text-xs font-semibold '>Max age</label>
              <input type="text" name='maxAge' id='maxage' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-address-card"></i></span>
            </div>

            <div className='relative col-span-1 gap-2'>
              <label htmlFor="mode" className='absolute top-1 left-5 text-xs font-semibold '>Mode</label>
              <input type="text" name='mode' id='mode' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-house-laptop"></i></span>
            </div>

            <div className='relative col-span-2 row-span-2 gap-2'>
              <label htmlFor="description" className='absolute top-1 left-5 text-xs font-semibold '>Description</label>
              <textarea type="text" name='description' id='description' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-full resize-none border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute top-1 right-5'><i class="fa-solid fa-pen-to-square"></i></span>
            </div>

            <div className='relative col-span-1 gap-2'>
              <label htmlFor="capacity" className='absolute top-1 left-5 text-xs font-semibold '>Capacity</label>
              <input type="number" name='capacity' id='capacity' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-people-group"></i></span>
            </div>

            <div className='relative col-span-1 gap-2'>
              <label htmlFor="category" className='absolute top-1 left-5 text-xs font-semibold '>Category</label>
              <select name='category' id='category' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'>
                <option value="sports">Sports</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="seminar">Seminar</option>
                <option value="party">Party</option>
                <option value="concert">Concert</option>
                <option value="exibition">Exibition</option>
                <option value="fest">Fest</option>
                <option value="others">Others</option>
                </select>
            </div>

            <div className='relative col-span-2 gap-2'>
              <label htmlFor="location" className='absolute top-1 left-5 text-xs font-semibold '>Location</label>
              <input type="text" name='location' id='location' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-location-dot"></i></span>
            </div>

            <div className='relative col-span-1 gap-2'>
              <label htmlFor="start" className='absolute top-1 left-5 text-xs font-semibold '>Start</label>
              <input type="datetime-local" name='starts' id='start' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-2 pr-2 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              
            </div>

            <div className='relative col-span-1 gap-2'>
              <label htmlFor="end" className='absolute top-1 left-5 text-xs font-semibold '>End</label>
              <input type="datetime-local" name='ends' id='end' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-2 pr-2 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              
            </div>

            <div className='relative col-span-1 gap-2'>
              <label htmlFor="instagram" className='absolute top-1 left-5 text-xs font-semibold '>Instagram</label>
              <input type="url" name='instagram' id='instagram' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-brands fa-instagram"></i></span>
            </div>

            <div className='relative col-span-1 gap-2'>
              <label htmlFor="facebook" className='absolute top-1 left-5 text-xs font-semibold '>Facebook</label>
              <input type="url" name='facebook' id='facebook' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-brands fa-facebook"></i></span>
            </div>

            <div className='relative lg:row-start-5 lg:row-end-6 row-start-[10] row-end-[11]  col-span-2 gap-2'>
              <label htmlFor="cover" className='absolute top-1 left-5 text-xs font-semibold '>Cover Image</label>
              <input type="file" name='cover' id='cover' accept="image/*" onChange={(e)=>handleInputChange(e)} className=' pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              
            </div>

            <div className='relative col-span-1 gap-2'>
              <label htmlFor="twitter" className='absolute top-1 left-5 text-xs font-semibold '>Twitter</label>
              <input type="url" name='twitter' id='twitter' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-brands fa-twitter"></i></span>
            </div>

            <div className='relative col-span-1 gap-2'>
              <label htmlFor="website" className='absolute top-1 left-5 text-xs font-semibold '>Website</label>
              <input type="url" name='website' id='website' onChange={(e)=>handleInputChange(e)} className='pt-5 pb-2 pl-5 pr-8 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200'/>
              <span className='absolute right-3 top-1/2  -translate-y-1/2'><i class="fa-solid fa-link"></i></span>
            </div>

            <div className='lg:col-span-4 col-span-2 flex justify-center'>
              <input type="submit" value={"Submit"}  className=" cursor-pointer py-2 px-3 w-[30%] h-14 border rounded-2xl font-semibold focus:border-sky-400 bg-sky-400 text-white outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200" />
            </div>
          </form>:<div className='flex flex-col justify-center items-center'>
            <div className='w-[80px] aspect-square border-[10px] mb-4 font-semibold rounded-full border-sky-400 flex justify-center items-center text-sky-400 text-3xl'>
              <span>{status>=200 && status<300?<i class="fa-solid fa-check"></i>:<i class="fa-solid fa-xmark"></i>}</span>
            </div>
            <p className='text-center'>{status>=200 && status<300?"The Event has been created Successfully! Check Profile for more details.":"There has been an error during event creation! Please try again."}</p>
          </div>}
        </div>
      </div>
      
    </div>
  )
}
