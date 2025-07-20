import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer'
import Card from './Card.jsx'

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="content hidden lg:flex mt-20 flex-col items-center justify-between pt-4 mx-8">
        <div>
          <h1 className='font-bold text-2xl'>Page Title</h1>
          <p className='mt-2'>Home | Link one</p>
        </div>
        <div className='home_image w-full flex items-center relative'>
          <img src="src\assets\Image.png" alt="poast_card" className='mt-4 w-full  h-98 rounded-lg object-cover px-4' />
          <div className='absolute left-6 bottom-2 w-1/2'>
            <p className='ml-6 px-3 mb-4 py-2 text-white w-fit bg-blue-500 rounded-md'>Technology</p>
            <p className=' pl-6 text-4xl text-white font-bold'>
              The Impact of Technology on the Workplace: How Technology is Changing
            </p>
            <p className=' pl-6 text-white mt-4 mb-8 font-medium'>
              Tracey Wilson <span className='pl-8 font-thin'>August 20,2025</span>
            </p>
          </div>
        </div>
      </div>
      {/* card section */}
      {/*  */}
      {/*  */}
      <div className='cards grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 mx-12 px-8'>
      {Array.from({ length: 9 }).map((_, index) => (
        <Card key={index} />
      ))}
      </div>
      <div className='loadmore_div flex items-center justify-center'>
        <button className=" border-2 border-gray-200 rounded-md mt-8 px-4 p-2 text-gray-500">Load More</button>
      </div>
      <Footer />
    </>
  )
}

export default Homepage