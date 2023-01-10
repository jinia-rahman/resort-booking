import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {faFacebook ,faInstagram ,faTwitter,faYoutube} from 'react-icons/fa'
import './Navbar.css'

function Navbar ()  {
    const [nav,setNav] =useState(false)
    const handleNav =()=>setNav(!nav)
  return (
    <div className='navbar'>
<div className='logo'>
    <h2>RESORT</h2>
</div>
<ul className='nav-menu'>
    <li>Home</li>
    <li>Destination</li>
    <li>Travel</li>
    <li>Booking</li>
    <li>Views</li>
</ul>
<div className='nav-icons'>
<BiSearch className='icon' style={{marginRight:'1rem'}}/>
<BsPerson className ='icon' />
</div>
<div className='humburger' onClick={handleNav}>
    <HiOutlineMenuAlt4 className='icon' />
</div>
<div className={nav ?'mobile-menu active' :'mobile-menu'}>    
    <ul className='mobile-nav'>
    <li>Home</li>
    <li>Destination</li>
    <li>Travel</li>
    <li>Booking</li>
    <li>Views</li>
    </ul>
    <div className='mobile-menu-button'>
        <div className='menu-icons'>
<button>Search</button>
<button>Account</button>
        </div>
        <div className='social-icons'>
            <faFacebook className="icon"/>
            <faInstagram className="icon"/>
            <faTwitter className ="icon"/>
            <faYoutube className="icon"/>
        </div>
    </div>
    </div>
</div>
  )
}

export default Navbar