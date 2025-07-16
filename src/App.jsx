import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Products from './components/Products'
import BackToTop from './components/BackToTop'
import { Box } from '@chakra-ui/react'

import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Box bg="#1a202c" color="white" minH="100vh">
        <Header />
        <div className='main-page'>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/services" element={<Services />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/products" element={<Products />} />
          </Routes>
          <Footer />
        </div>
        <BackToTop />
      </Box>
    </BrowserRouter>
  )
}

export default App
