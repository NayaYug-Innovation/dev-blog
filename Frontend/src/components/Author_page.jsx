import Header from './Header';
import Footer from './Footer';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Author_page = () => {
  return (
    <>
    <Header/>
    <div className="author mt-20  pt-4 mx-12">
      <div className="author_info w-full mx-4 px-12 h-auto rounded-md bg-gray-200 flex flex-col items-center pt-8 pb-4">
        <img src="https://picsum.photos/200" alt="image" className='w-14 h-14 rounded-full object-cover'/>
        <div className="author_name text-lg mt-2"> Jonathan Doe <br /><span className='text-gray-500 text-sm'> Collaborator & Editor</span></div>
        <div className='author_data text-black leading-relaxed mt-4 text-lg text-center max-w-xl'>Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</div>
        <div className='flex gap-4 mt-6 mb-4'>
          <div className='bg-red-100 w-8 h-8 flex justify-center items-center rounded-lg'><FaFacebook /></div>
          <div className='bg-red-100 w-8 h-8 flex justify-center items-center rounded-lg'><FaTwitter /></div>
          <div className='bg-red-100 w-8 h-8 flex justify-center items-center rounded-lg'><FaInstagram /></div>
          <div className='bg-red-100 w-8 h-8 flex justify-center items-center rounded-lg'><FaYoutube /></div>

        </div>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
  + Create Post
</button>
      </div>
      <div className="latest_post mx-4">
        <div className='text-xl font-bold pt-8 block'>Latest Post</div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Author_page;