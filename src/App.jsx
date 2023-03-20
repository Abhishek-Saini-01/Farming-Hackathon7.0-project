import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import ContactForm from './components/Contact/Contact';
import About from './pages/About';
import Instruments from './pages/Instruments';

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/instruments' element={<Instruments />} />
      </Routes>
    
  )
}

export default App