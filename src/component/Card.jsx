import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import dateTimeParser from '../shared/TimeParser';
import CardSkeleton from '../skeletons/CardSkeleton';
export default function Card({data,classes}) {
  const [wishlistResponse,setWishlistResponse]=useState(null);
  async function wishlist(e)
  {
    e.preventDefault();
     
    axios.post("/wishlists",{"event":data._links.event.href,"time":new Date().toISOString().replace("T"," ").split(".")[0]}).then(response=>{
        setWishlistResponse("success");
    }).catch(err=>{
      console.log(JSON.stringify(err));
        setWishlistResponse("failed");
    })

  }
  function capatalize(str)
  {
    var nameArray=str.split(" ");
    var name="";
    nameArray.forEach(element => {
      name+=(element.charAt(0).toUpperCase()+element.slice(1)+" ");
    });
    return name;
  }
   function getWishlistIcon()
   {
      return !wishlistResponse||wishlistResponse==="failed"?<span><i class="fa-regular fa-heart font-black"></i></span>:<span class="text-red-400"><i class="fa-solid fa-heart"></i></span>;
   }
   function wishlistEventHandler()
   {
      setTimeout(()=>{
        setWishlistResponse(null);
      },3000);
      return (<div className='border-inherit shadow-sm text-center text-red-500 p-2 absolute top-2'>
        Action failed!
      </div>)
   }
  return (
    data?
    (<Link to={{pathname:`/events/${data.event.id}`}} className={(classes?classes:null)+' shrink-0 mx-[1.5%] sm:w-[30.33%] w-[47%] rounded-3xl inline-block  lg:w-[22%] aspect-[1/1.5] p-2 border border-black hover:bg-blue-400  hover:shadow-xl hover:border-white '}>
        <div className='flex flex-col relative'>
          {wishlistResponse==="failed"?wishlistEventHandler():null}
          <button className='rounded-full w-14 h-14 hover:bg-red-400 bg-white absolute flex shadow-md justify-center items-center top-2 right-2 z-20 hover:text-white' onClick={(e)=>{wishlist(e);}}>{getWishlistIcon()}</button>
        <img src={"data:image/jpeg;base64, "+data.event.cover} alt="Event cover" className='w-full border aspect-[1/1] rounded-3xl' />
            <div className='grow grid grid-cols-2 grid-row-4 gap-2'>
                <div className='col-span-1 row-span-2 flex  items-center'>
                    <img src={"data:image/jpeg;base64, "+data.event.creator.pfp} alt="host pfp" className='w-1/3 aspect-square rounded-full'/>
                </div>
                <p>Creator</p>
                <h1 className='font-bold'>{capatalize(data.event.creator.name)}</h1>
                <div className='col-span-2 row-span-1'>Starts at:</div>
                <div className='col-span-2 md:font-bold font-medium flex justify-between'>
                  {data?dateTimeParser(data.event.starts).map(e=>{
                      return <span>{e}</span>
                  }):["--/--/----","00:00:00"].map(e=>{
                    return <span>{e}</span>
                  })}
                   </div>
            </div>
        
        </div>
    </Link>):(<CardSkeleton count={1}></CardSkeleton>)
  )
}
