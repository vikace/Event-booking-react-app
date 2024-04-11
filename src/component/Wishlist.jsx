import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WishlistSkeleton from '../skeletons/WishlistSkeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import WishlistCard from './WishlistCard';
import FormResponse from './FormResponse';

export default function Wishlist({event}) {
  const [wishlist,setWishlist]=useState([]);
  const [error,setError]=useState(0);
  function removeEventListner(url)
  {
    setWishlist(wishlist.filter((w)=>(w._links.wishlist.href!==url)));
  }  
  useEffect(()=>{
     axios.get("/user/basicinfo").then(response=>{
      axios.get(`/users/${response.data.id}/wishlists`).then(response=>{
        setWishlist(response.data._embedded.wishlists);
      }).catch(err=>{
        setError(500);
        console.log(JSON.stringify(err));
      })
    }).catch(err=>{
        setError(500);
    });

  },[]);
  console.log(wishlist);
  return (
    <div >
      <h1 className='font-bold text-3xl mt-4 text-center'>Your Wishlist</h1>
      <div className='wishlist-cont p-4 grid grid-cols-1 gap-4 '>
      {
        wishlist.length!=0?wishlist.map((e)=>{
          return (<WishlistCard data={e} removeEventListner={removeEventListner}></WishlistCard>)
        }):error==500?<FormResponse></FormResponse>:<WishlistSkeleton count={5}></WishlistSkeleton>
      }        
      </div>
    </div>
  )
}
