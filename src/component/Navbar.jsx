import React, { useEffect, useState } from 'react'
import Button from './Button';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export default function Navbar ({session,menuToggle,handleMenuToggle}) {
    var getActiveClassName=({isActive})=>(isActive?" bg-sky-400 text-white ":" hover:bg-gray-300 bg-gray-200 ")+"font-semibold rounded-3xl w-full h-full py-2 inline-block px-3";
    const [pfp,setPfp]=useState(null);
    useEffect(()=>{
            axios.get("/user/profileinfo").then(response=>{
                    setPfp("data:image/jpeg;base64 "+response.pfp);
                    console.log(response.pfp)
            })
    },[session])
  return (
    <div>
        <ul className='flex relative justify-between text-gray-600 py-2 h-14  shadow-md'>
            
            <li className='left md:w-3/5 w-full pl-7 '>
                <ul className='flex h-full items-center '>
                    <li className='menu  text-2xl flex '><div className='p-1 rounded-full border-2 cursor-pointer border-sky-400' onClick={(e)=>handleMenuToggle(e)}><div className={'w-5 h-5 rounded-full '+(menuToggle?'bg-sky-400':'')}></div></div></li>
                    <li className='home h-full pl-8'><NavLink className={getActiveClassName}   to="/">Home</NavLink></li>
                    <li className='explore h-full pl-3'><NavLink className={getActiveClassName}  to="/explore">Explore</NavLink></li>
                    <li className='aboutus h-full pl-3 whitespace-nowrap'><NavLink className={getActiveClassName}  to="/aboutus">About-us</NavLink></li>
                
                </ul>
            </li>
            
            <li className='right md:w-2/5 pr-5 hidden md:block'>
                <ul className='flex justify-end h-full'>
                    {session?<><li className='wishlist mr-3 h-full'><NavLink to="/wishlist" className={getActiveClassName}><i class="fa-solid fa-bag-shopping"></i></NavLink></li>
                    <li className='profile h-full'><NavLink to="/profile" className='inline-block h-6 w-6' ><img className='w-full h-full rounded-full' src={pfp} alt="PFP" /></NavLink></li></>:<><li className='signup mr-3 h-full'><NavLink to="/signup" className={getActiveClassName} >Sign-up</NavLink></li>
                    <li className='login h-full'><NavLink to="/login" className={getActiveClassName} >Login</NavLink></li></>}
                    
                </ul>
            </li>
            
        </ul>
    </div>
  );
}
