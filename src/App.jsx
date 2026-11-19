import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header'
import Body from './components/body'
import Card from './components/card'
import Card1 from './components/card1'
import Meet from './components/meet'
import Card2 from './components/card2'
import Card3 from './components/card3'
import Footer from './components/footer'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/contact'
import Homepage from './components/homepage'
import Card4 from './components/card4'
import Brandcard from './components/brandcard'


function Home() {
  return (
    <>
      <Header />
      <Body />
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4/><br /><br />
      <Brandcard/><br />
      <Footer />
    </>
  );
}

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/homepage" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
