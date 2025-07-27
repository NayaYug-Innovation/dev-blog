import React, { useState  } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci';
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { FaBlog, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="header fixed top-0 left-0 w-full z-50 h-20 pt-6 gap-8 flex  justify-center bg-gray-100">
      <div className="logo pl-8 ml-8 mr-8 pr-4 pt-2">
        <FaBlog />
      </div>
      <div className="header_middle hidden lg:flex lg:flex-1 lg:justify-between lg:px-16 lg:mx-8 lg:pt-2">
        <div className="home"><Link to="/">Home</Link></div>
        <div className="blog"><Link to="/blogs">Blog</Link></div>
        
        <div className="pages"><Link to='/Author'> Author</Link></div>
        <div className="contact"> <Link to=''> Contact </Link></div>
        <div className="login"> <Link to='/login'> Login</Link></div>
        <div className="signup"> <Link to='/signup'> Signup</Link></div>
      </div>
      <div className="right hidden lg:flex lg:justify-center lg:ml-8 lg:pl-4 lg:mr-8 lg:gap-4">
        <div className='search w-auto relative'>
          <input type="text" placeholder='Search' className='bg-gray-100 h-10 pl-4 px-2 py-1 rounded relative focus:outline-none' />
          <CiSearch className="text-gray-600 text-2xl cursor-pointer absolute right-3 top-2" />
        </div>
        <div className='bg-zinc-100 rounded-xl h-10 flex items-center overflow-auto px-2 py-0'>
          <button className='toggle bg-transparent hover:bg-zinc-200 rounded-sm px-2 py-2 '>
            <IoSunny />
          </button>
          <button className='toggle bg-transparent hover:bg-zinc-200 rounded-sm px-2 py-2 '>
            <IoMdMoon />
          </button>
        </div> 
      </div>
       <div className="lg:hidden flex justify-right pr-8 ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full bg-gray-100 shadow-md z-40">
          <div className="flex flex-col items-start gap-4 p-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/blog/:id" onClick={() => setMenuOpen(false)}>Single Post</Link>
            <Link to="/Author" onClick={() => setMenuOpen(false)}>Author</Link>
            <Link to="" onClick={() => setMenuOpen(false)}>Contact</Link>        
          </div>
        </div>
      )}
    </div>
  )
}


export default Header