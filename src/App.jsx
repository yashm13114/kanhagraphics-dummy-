import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,HashRouter } from 'react-router-dom'
import {
  Collapse,
  initTWE,
} from "tw-elements";
import { Navbar } from './Components/Navbar';
import Logo from './assets/images/image.svg'
import ContactUs from './Components/ContactUs'
import { Home } from './Components/Home'
import AboutPage from './Components/AboutPage';
import { Services } from './Components/Services';
import ScrollToTop from './Components/ScrollToTop';
import { Pricing } from './Components/Pricing';
function App() {
  initTWE({ Collapse });

  return (
    <>
      <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/About-Us" element={<AboutPage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
      <ScrollToTop />
    </HashRouter>

    </>
  )
}

export default App
