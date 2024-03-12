import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'
import SignUp from './components/pages/SignUp'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './Chatbot/config'
import MessageParser from './Chatbot/ActionProvider'
import ActionProvider from './Chatbot/MessageParser'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Read from './components/Read'
import Write from './components/Write'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <div className='App'>
                <div style={{ maxWidth: '300px' }}>
                  <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                  />
                </div>
                <div>
                  <span>
                    {' '}
                    <Link to='/read'> Read data from Server</Link>{' '}
                  </span>
                  <span>
                    <Link to='/write'> Write data to Mongodb</Link>
                  </span>
                </div>
                <Home />
              </div>
            }
          />
          <Route path='/read' element={<Read />} />
          <Route path='/write' element={<Write />} />
          <Route path='/' element={<Write />} />
          <Route path='/services' Component={Services} />
          <Route path='/about-us' Component={AboutUs} />
          <Route path='/contact' Component={Contact} />
          <Route path='/sign-up' Component={SignUp} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
