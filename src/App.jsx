import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import { Box } from '@chakra-ui/react'

import './App.css'


function App() {

  return (
    <Box bg="#1a202c" color="white" minH="100vh">
      <Header />
      <div className='main-page'>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </Box>
  )
}

export default App
