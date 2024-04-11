import React, { useState } from 'react'
import NavButton from './NavButton';
import { NavLink } from 'react-router-dom';
export default function SideBar({session,changePage,currentPage,menuToggle}) {
    const [hover,setHover]=useState('');
    const tooltip="absolute bottom-1/2 z-20  translate-y-1/2 after:content-['']  after:border-4 after:border-gray-800 after:border-l-transparent after:border-t-transparent after:border-b-transparent after:absolute after:right-full left-[115%] rounded-xl py-1 px-2 bg-gray-800 after:bottom-1/2 after:translate-y-1/2 text-white whitespace-nowrap ";
    const getActiveClassName=({isActive})=>{
      return (isActive?'bg-sky-400 text-white ':'hover:bg-gray-300 ')+'nav-button  h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center';
    }
    return (
    <div  className='flex flex-col justify-between shrink-0  sticky  py-3 px-3 shadow-gray-200 bg-black rounded-3xl ml-2 top-3  shadow-lg min-h-[80vh] '>
              <ul className='h-fit  grid grid-cols-1 gap-4 py-1'>
                <li className='max-h-10 max-w-10'><img className='w-full h-full' src="/logo.png" alt="" /></li>
              </ul>
               <ul className='h-fit grid grid-cols-1 gap-4 py-4'>
                   <li className="relative min-w-fit" onMouseOver={()=>{setHover('home')}} onMouseLeave={()=>{setHover('')}} ><NavLink to="/" className={getActiveClassName}><i class="fa-solid fa-house"></i></NavLink> {hover==="home"?<div className={tooltip}>{hover}</div>:null}</li>
                   <li className="relative min-w-fit" onMouseOver={()=>{setHover('create event')}} onMouseLeave={()=>{setHover('')}}><NavLink to="/createevent" className={getActiveClassName}><i class="fa-solid fa-plus"></i></NavLink>{hover==="create event"?<div className={tooltip}>{hover}</div>:null}</li>
                   <li className="relative min-w-fit" onMouseOver={()=>{setHover('wishlist')}} onMouseLeave={()=>{setHover('')}} ><NavLink to="/wishlist" className={getActiveClassName}><i class="fa-solid fa-heart"></i></NavLink> {hover==="wishlist"?<div className={tooltip}>{hover}</div>:null}</li>  
                </ul>
                
                <ul className='grid  grid-cols-1 gap-4 py-4'>
                    {session?<><li className="relative w-fot" onMouseOver={()=>{setHover('profile')}} onMouseLeave={()=>{setHover('')}} ><NavLink to="/profile" className={getActiveClassName}><i class="fa-solid fa-user"></i></NavLink> {hover==="profile"?<div className={tooltip}>{hover}</div>:null}</li>
                   <li className="relative min-w-fit" onMouseOver={()=>{setHover('logout')}} onMouseLeave={()=>{setHover('')}}><NavLink to="/logout" className={getActiveClassName}><i class="fa-solid fa-bracket"></i></NavLink>{hover==="logout"?<div className={tooltip}>{hover}</div>:null}</li></>:<>
                <li className="relative min-w-fit" onMouseOver={()=>{setHover('signup')}} onMouseLeave={()=>{setHover('')}}><NavLink to="/signup" className={getActiveClassName}><i class="fa-solid fa-user-plus"></i></NavLink>{hover==="signup"?<div className={tooltip}>{hover}</div>:null}</li>
                <li className="relative min-w-fit" onMouseOver={()=>{setHover('login')}} onMouseLeave={()=>{setHover('')}} ><NavLink to="/login" className={getActiveClassName}><i class="fa-solid fa-right-to-bracket"></i></NavLink>{hover==="login"?<div className={tooltip}>{hover}</div>:null}</li></>}
                 </ul>
                  
            </div>
  );
}
