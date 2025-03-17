import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import "./css/fonts.css"
import About from './pages/About'
import { useEffect } from 'react'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Resources from './pages/Resources'

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
              <Route path='/resources' element={<Resources />} />
    </Routes>
  )
}

export default App
