import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
   <nav className='py-5'>
    <div className='container mx-auto'></div>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-8'>
                <img src={Logo} alt="" />
                <ul className='flex gap-8'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className='flex gap-10'>
                <button>Sign Up</button>
                <button className='px-10 py-2 rounded-md bg-primary text-white text-lg'>LogIn</button>
            </div>
        </div>
   </nav>
  )
}

export default navbar
