import React from 'react'

export default function Footer() {
  return (
    <div className='px-[1.5%] mt-2'><div
    className="flex md:flex-row flex-wrap pt-4 flex-initial text-white flex-col rounded-3xl overflow-clip text-center bg-gradient-to-br from-zinc-950 to-zinc-800">
    <div className="min-w-full text-2xl font-semibold mb-3">
        About Us
    </div>
    <div className="md:w-1/3  p-4">
        <span className="inline-block px-1 text-lg"><i className="fa-solid fa-user"></i></span>
        <span className="font-semibold">Vikesh Maurya</span><br/>
        <p className="mt-3">Hello! I am vikesh andMaury this mediocre website is build by me.</p>
    </div>
    <div className="md:w-1/3 p-4 ">
        <p className="mb-3 font-semibold">Top used Features.</p>

        <span className="inline-block px-1 text-lg"><i className="fa-solid fa-pen"></i></span><span> Event
            Listing</span><br/>
        <span className="inline-block px-1 text-lg"><i className="fa-solid fa-registered"></i></span><span> Event
            Registeration</span><br/>
        <span className="inline-block px-1 text-lg"><i className="fa-solid fa-gears"></i></span><span> Guest
            Management</span><br/>



    </div>
    <div className="md:w-1/3 p-4 ">
        <span className="inline-block px-1 text-lg"><i className="fa-brands fa-facebook"></i></span>
        <span className="inline-block px-1 text-lg"><i className="fa-brands fa-twitter"></i></span>
        <span className="inline-block px-1 text-lg"><i className="fa-brands fa-instagram"></i></span><br/>
        <p className="mt-3">We eager to connect to you on our socials above.</p>
    </div>
    <div className="min-w-full pt-4 bg-sky-400 pb-4">
        <p><span className="inline-block px-1"><i className="fa-solid fa-copyright"></i></span>Made with <i
                className="fa-solid fa-heart text-red-500"></i> in Jankipuram
            Lucknow</p>
    </div>
</div></div>
  )
}
