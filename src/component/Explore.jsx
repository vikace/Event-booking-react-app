import React, { useEffect } from 'react'
import Button from './Button';
import { useState } from 'react';
import Card from './Card';
import axios from 'axios';
import CardSkeleton from '../skeletons/CardSkeleton';

export default function Explore() {
  const categories=new Array("sports","comedy","drama","seminar","party","concert","exibition","fest","charity","others");
  const [categoryFilterList,setCategoryFilterList]=useState([]);
  const [data,setData]=useState([]);
  const [nextLink,setNextLink]=useState('/events');
  const[filterToggle,setFilterToggle]=useState(false);
  var summaryClass=(filterToggle?'bg-sky-400 text-white ':null)+' min-w-[9%] inline-block font-semibold cursor-pointer mb-2 hover:bg-sky-300 hover:text-white right-0 border rounded-3xl  py-2 px-4 '
  function handleCategoryFilter(e)
  {
    if(!categoryFilterList.includes(e.category))
    setCategoryFilterList([...categoryFilterList,e.category]);
    else
    setCategoryFilterList(categoryFilterList.filter(item=>
  item!==e.category))
  }
  async function fetchData()
  {
    
   await axios.get(nextLink).then((response)=>{
      setData([...data,...(response.data._embedded.events)]);
      setNextLink(response.data._links.next);
    }).catch((error)=>{

    })
  }
  function handleShowMore(e)
  {
    fetchData();
  }
  useEffect(()=>{
    fetchData();
  })
  return (
    <div className='py-2 px-4'>
      {/* filter */}
      <details className='filters mx-[1.5%]'>
        <summary onClick={()=>{setFilterToggle(!filterToggle)}} className={summaryClass}>Filter by {filterToggle?<i className="fa-solid fa-caret-down "></i>:<i className="fa-solid fa-caret-right "></i>}</summary>
      <div className=' grid lg:grid-cols-10 lg:grid-rows-1 sm:grid-cols-5 sm:grid-rows-2 grid-cols-3 grid-row-4 gap-2 justify-evenly flex-wrap'>
        {
          categories.map((e)=>{
           return <div className='min-w-[9%] '><Button handler={handleCategoryFilter} active={categoryFilterList.includes(e)}>{e}</Button></div>
          })
        }
        
      </div>
      </details>
      {/* Explore */}
      <div className='explore my-4'>
        <h1 className='font-bold text-2xl text-center'>Explore</h1>
      </div>
      <div className='explore-window flex flex-wrap mb-4'>
        {data.length!=0?data.map((element,i)=>{
          
          return categoryFilterList.length==0?<Card classes={"mb-4"} data={element} key={"event "+i}/>:categoryFilterList.includes(element.event.category)?<Card classes={"mb-4"} data={element} key={"event "+i}/>:null;
        }):<CardSkeleton count={5} classes={'mb-4'}></CardSkeleton>}
       
        
        
      </div>

      <div className='flex justify-center'>
        {nextLink?null:<div className='w-fit'><Button active={true} handler={handleShowMore}><span>show more  <i className="fa-solid fa-caret-down "></i></span></Button></div>
      }
          </div>
  
    </div>
  )
}
