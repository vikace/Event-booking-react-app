import axios from 'axios';
import React, { useState,useEffect } from 'react'
import ProfileDetails from './ProfileDetails';
import ProfileEdit from './ProfileEdit'
import { Link } from 'react-router-dom';
export default function Profile() {
  const [viewing,setViewing]=useState(true);// all operations view(0), edit(1)
  const [data,setData]=useState(null);
  async function handleViewEditToggle()
  {
    setViewing(!viewing);
  }
  useEffect(()=>{
    axios.get("user/profileinfo").then(response=>{
      
    setData({...(response.data)});
    }).catch(err=>{
      setData({"status":500})
    });
   
  },[]);
  return (
    <div className='profile  mt-4 flex flex-col justify-center items-center'>

      <div className='profileInfo w-full md:w-4/5 border rounded-3xl p-4'>
        <div className='buttons-cont flex justify-center mb-4'>
            
           <div className="w-[100px] flex justify-between"><button className={(viewing?'bg-blue-400':null)+' view rounded-full h-10 w-10'} onClick={handleViewEditToggle}><i class="fa-solid fa-user"></i></button>
            <button className={(!viewing?'bg-blue-400':null)+' view rounded-full h-10 w-10'} onClick={handleViewEditToggle}><i class="fa-solid fa-pen-to-square"></i></button></div>
        </div>
        {viewing?<ProfileDetails data={data}/>:<ProfileEdit data={data}/>}
      </div>

      {/*buttons for user bookings, create events */}
      <div className='profileInfo w-full mt-4 md:w-4/5 border rounded-3xl p-4 flex justify-center '>
        <div className='grid gap-2 grid-cols-2 grid-rows-1'>
        <Link to={"/bookings"} className={"font-semibold flex items-center justify-center  rounded-3xl w-full h-11 py-2  px-3 bg-sky-400 text-white cursor-pointer"}>Bookings</Link>
          <Link to={"/createdevents"} className={"font-semibold flex items-center  rounded-3xl w-fit h-11 py-2  px-3 bg-sky-400 text-white cursor-pointer"}>Created Events</Link>
        </div>
          
      </div>
          
    </div>
  )
}
