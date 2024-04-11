import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Explore from './component/Explore';
import Home from './component/Home';
import EventPrev from './component/EventPrev';
import CreateEvent from './component/CreateEvent';
import Login from './component/Login';
import Logout from './component/Logout';
import Signup from './component/Signup';
import Profile from './component/Profile';
import SideBar from './component/SideBar';
import Wishlist from './component/Wishlist';
import Navbar from './component/Navbar';
import AboutUs from './component/AboutUs';
import { Routes } from 'react-router-dom';
import Bookings from './component/Bookings';
import CreatedEvents from './component/CreatedEvents';
import axios from 'axios';
import EventsWishlist from './component/EventsWishlist';
import EventsBookings from './component/EventsBookings';


function App() {
  const [session,setSession]=useState(false);
  const [currentPage,setCurrentPage]=useState("home");//home,about us(aboutus),login,signup,event preview(eventprev),explore,profile,create event(createevent),wishlist, 
  const [menuToggle,setMenuToggle]=useState(false);
  function handleMenuToggle(e)
    {
        
        setMenuToggle(!menuToggle);
    }
  function changeSession(value)
  {
    setSession(value);
  }
  function changePage(page)
  {
    setCurrentPage(page);
  }
  useEffect(()=>{
    axios.get("/user/basicinfo").then(response=>{
      if(response.status>=200&&response.status<300){setSession(true)}
    }).catch(err=>{
      setSession(false);
    })
  },[]);
  return (
    <div>
    <div className='nav-cont font-Montserrat'><Navbar session={session} changePage={changePage} currentPage={currentPage} handleMenuToggle={handleMenuToggle} menuToggle={menuToggle}/></div>
    <div className='view-cont font-Montserrat flex flex-row'>
      {menuToggle?<div className='shrink-0 drop-shadow-md py-4 absolute z-[10000]'><SideBar session={session} changePage={changePage} currentPage={currentPage} menuToggle={menuToggle}/></div>:null}
      <div className='grow overflow-x-hidden'><Routes basename='/api'>
      <Route path='/' element={<Home/>} />
      <Route path='/explore' element={<Explore/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/signup' element={< Signup/>} />
      <Route path='/bookings' element={<Bookings/>} />
      <Route path='/createdevents' element={<CreatedEvents/>} />
      <Route path="events/:id" element={<EventPrev/>}/>
      <Route path='/login' element={< Login handleSession={changeSession}/>} />
      <Route path='/wishlist' element={< Wishlist/>} />
      <Route path='/eventswishlist/:id' element={< EventsWishlist/>} />
      <Route path='/eventsbookings/:id' element={< EventsBookings/>} />
      <Route path='/createevent' element={< CreateEvent/>} />
      <Route path='/profile' element={< Profile/>} />
      <Route path='/logout' element={< Logout handleSession={changeSession}/>} />
      </Routes></div>
    </div>
    </div>
    
  )
}

export default App;
