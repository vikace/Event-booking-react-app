import React from 'react'

export default function ({children,handler,active,classArray}) {
  const cn=(active?" bg-sky-400 text-white ":" hover:bg-gray-300 bg-gray-200 ")+"font-semibold rounded-3xl w-full h-full py-2 inline-block px-3";;
  return (
    <button className={cn} onClick={(e)=>{
     e.category=children; var a=handler?handler(e):null}} >{children}</button>
  )
}
