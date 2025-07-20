import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Single_post = () => {
  return (
    <>
      <Header />
      <div className='mt-20 pt-4 px-22 mx-8 flex flex-col items-start'>
        <p className=' px-3 mb-4 py-2 text-white w-fit bg-blue-500 rounded-md'>Technology</p>
        <div className=' text-4xl text-black font-bold'>
          The Impact of Technology on the Workplace: How Technology is Changing
        </div>
        <p className='text-black mt-4 mb-8 font-medium'>
          Tracey Wilson <span className='pl-4 font-thin'>August 20,2025</span>
        </p>
        <img src="https://picsum.photos/800" alt="blog image" className="blog_image w-full h-100 object-cover rounded-md" />
        <div className="content pt-4  leading-relaxed">
          Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.

          One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect. <br></br>
          <span className='text-xl font-bold pt-8 block'>Research Your Destination</span> <br />
          Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
          <br />  <span className='text-xl font-bold pt-8 block'> Plan Your Itinerary </span> <br />
          While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Single_post