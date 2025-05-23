import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import "./css/fonts.css"
import About from './pages/About'
import { useEffect } from 'react'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Resources from './pages/Resources'
import SingleArticle from './pages/SingleArticle'
import SingleService from './pages/SingleService'

function App() {
  const location = useLocation();

  useEffect(() => {
        window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path='/contact-us' element={<Contact />} />
              <Route path="/what-we-do" element={<Services />} />
              <Route path='/what-we-do/:name' element={<SingleService />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/resource/:title' element={<SingleArticle />} />
    </Routes>
  )
}

export default App
