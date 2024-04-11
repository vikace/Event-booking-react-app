import React from 'react'

export default function NavButton({children,handler,active}) {
  const cn=(active?'bg-sky-400 text-white ':'hover:bg-gray-300 ')+'nav-button  h-10 w-10 bg-gray-200 rounded-full';
  return (
    <button className={cn+' flex items-center justify-center'} onClick={(e)=>handler(e)}>{children}</button>
  );
}
