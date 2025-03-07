import './App.css'
import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Home from './pages/student/Home';
import Navbar from './components/student/Navbar';

function App() {

  return (
    <div className='text-default min-h-screen bg-white' >

    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
