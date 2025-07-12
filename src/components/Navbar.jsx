

import logo from '../assets/image/logo.png';
import { FaShoppingCart, FaUser, FaSignInAlt, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = ({count}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <nav>
            <div className="flex flex-row justify-between items-center px-5 w-full z-10 bg-white py-2 fixed ">
                <div className="flex items-center">
                    <img src={logo} className='w-10 h-10 ' />
                    <h1 className='px-3 font-light-300 text-2xl '>Electronic</h1>
                </div>
                {/* Icons */}
                <div className="flex md:flex flex-row justify-center mx-3">
                    <div className="relative">
                        <NavLink to ="/" className='relative'> 
                            <FaShoppingCart className='text-3xl mx-3 text-gray-700' />
                            <span className='text-sm absolute top-0 right-2 bg-red-500 text-white px-1 rounded-full'>{count}</span>
                            </NavLink>
                    </div>
                    <NavLink to="/register">
                        <FaUser className='text-3xl mx-3 bg-gray-400 text-white rounded-full px-2 py-2 hover:bg-gray-600 cursor-pointer' />
                    </NavLink>
                    <NavLink to="/">
                    <FaSignInAlt className='text-3xl mx-3 text-white bg-gray-400 rounded-full px-2 py-2 hover:bg-gray-600 cursor-pointer' />
                    </NavLink>
                </div>
                {/* Hamburger icon for small screens */}
                <div className="md:hidden">
                    <FaBars className="text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
            </div>
            {/* for links  */}
            <div className={`text-center pt-3 ${menuOpen ? 'block' : 'hidden'} md:block  `}>
                <div className="flex flex-col md:flex-row  gap-2 justify-center bg-green-50 rounded-md pt-4 md:-ml-0 ml-1 fixed md:relative w-full  items-center mt-8 ">
                    <NavLink to ="" className='w-full  md:w-20  text-white hover:text-gray-800 bg-green-300 rounded-md py-1 mb-2  '>
                        Home
                    </NavLink >   
                        <NavLink to ="/feature" className=' px-2 text-gray-900 hover:text-gray-600 mb-2' >
                        Feature
                    </NavLink  >           
                        <NavLink to ="/services" className=' px-2 text-gray-900 hover:text-gray-600 mb-2'>
                        Services
                    </NavLink >              
                    <NavLink to ="/about" className='px-2 text-gray-900 hover:text-gray-600 mb-2'>
                        About us
                    </NavLink >              
                    <NavLink to="/register" className='px-2 text-gray-900 hover:text-gray-600 mb-2'>
                        Contact
                    </NavLink>     
                        </div>
                    </div>
        </nav>
        </>
    )
}

export default Navbar;