import React from 'react'
import { Link } from 'react-router-dom'

// error page
const Notfound = () => {
  return (
    <div className='text-center lg:mt-[200px] mt-8 '>
      <h1 className="text-3xl font-bold mt-8">404 - Page not Found</h1>
      <p className='mt-4'>The page you are looking for does not exist.</p>
      <Link to="/"><button className='bg-red-500 mt-8 p-2 rounded-lg cursor-pointer'>Back to Homepage</button></Link>
    </div>
  )
}

export default Notfound