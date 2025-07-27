import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes,useNavigate } from 'react-router-dom'
import Homepage from './components/Homepage'
import Single_post from './components/Single_post'
import Blogs from './components/Blogs'
import Author_page from './components/Author_page'
import Login from './components/Login'
import Signup from './components/Signup'
import Notfound from './components/Notfound'


function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Author" element={<Author_page />} />
      <Route path="/blogs" element={<Single_post />} />
      
      <Route path="/blog/:id" element={<Single_post />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />


      <Route path="*" element={<Notfound />} />
    </Routes>
  )
}

export default App
