import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWOrk from './components/OurWOrk'
import Teams from './components/Teams'
import ContactUS from './components/ContactUS'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy/>
      <Services/>
      <OurWOrk/>
      <Teams/> 
      <ContactUS/>
      <Footer theme={theme}  />
    </div>
  )
}

export default App
