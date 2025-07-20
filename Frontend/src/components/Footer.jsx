import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer hidden md:flex-wrap lg:flex flex-col bottom-0 left-0  w-full bg-gray-100 h-100 mt-16 px-20 pt-8'>
    <div className=" flex gap-4  pt-2">
        <div className='flex flex-col flex-1'>
          <span className='font-bold mb-2'>About</span>
          <span className='text-gray-500 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
          <span><span className='font-bold'>Email :</span> info@kbaniya</span>
          <span><span className='font-bold'>Phone :</span> +9779999999999</span>
        </div>
        <div className='flex flex-col flex-1 justify-start  items-start gap-2 text-gray-500'>
          <span className='font-bold text-black mb-2 pl-22' >Quick Link</span>
          <span className='pl-22'>Home</span>
          <span className='pl-22'>About</span>
          <span className='pl-22'>Blog</span>
          <span className='pl-22'>Author</span>
          <span className='pl-22'>Contact</span>
        </div>
        <div className='flex flex-col flex-1 justify-start items-start gap-2 text-gray-500'>
          <span className='font-bold text-black mb-2 pl-12'>Category</span>
          <span className='pl-12'>Lifestyle</span>
          <span className='pl-12'>Technology</span>
          <span className='pl-12'>Travel</span>
          <span className='pl-12'>Business</span>
          <span className='pl-12'>Economy</span>
          <span className='pl-12'>Business</span>
        </div>
        <div className='flex flex-col flex-1 bg-white h-60 p-8 pt-4 rounded-lg items-center'>
          <span className='py-2 font-bold text-lg'>Weekly Newsletter</span>
          <span className='text-sm pb-6 text-gray-500'>Get blogs articles and offers via email</span>
          <input type="text" placeholder='Your Email' className='border p-2 border-gray-200 rounded-lg w-full mb-2 shadow-lg'/>
          <button className='bg-blue-500 rounded-lg w-full text-white p-2 px-4 '>Subscribe</button>
        </div>
    </div>
    <div className='w-full h-0.5 bg-gray-500 mt-8'></div>
      <div className='mt-4 flex justify-between'>
        <div className="bottom_left">
          <div> Meta Blog </div>
          <div className='flex items-center gap-2'> <FaRegCopyright /> <span> 2025, ALl right reserved </span> </div>
        </div>
        <div className="bottom_right flex items-center">
          Terms of use <span className='ml-4'> private Policy </span>  <span className='ml-4'>cookie Policy</span>
          </div>   
      </div>
    </div>
  )
}

export default Footer