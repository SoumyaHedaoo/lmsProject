import './App.css'
import React from 'react'
import { Routes , Route, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import Navbar from './components/student/Navbar';
import AddCourse from './pages/educator/AddCourse';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import CourseList from './pages/student/CourseList';

function App() {

  const isEducator = useMatch('/educator/*');

  return (
    <div className='text-default min-h-screen bg-white' >

    {!isEducator && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseList" element={<CourseList />} />
         <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
