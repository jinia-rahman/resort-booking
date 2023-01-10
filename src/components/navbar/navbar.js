import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import './Navbar.css'

const Navbar = () => {
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
<BiSearch className='icon' />
<BsPerson className ='icon' />
</div>
<div className='humburger'>
    <HiOutlineMenuAlt4 className='icon' />
</div>
<div className='mobile-menu'>    
----------//mobile view//---------------
    <ul className='mobile-nav'>
    <li>Home</li>
    <li>Destination</li>
    <li>Travel</li>
    <li>Booking</li>
    <li>Views</li>
    </ul>
    <div className='mobile-menu-button'>
        <div className='social-icons'>

        </div>

    </div>

</div>
    </div>
  )
}

export default Navbar