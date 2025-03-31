import './App.css'
import React from 'react'
import { Routes , Route, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import Navbar from './components/student/Navbar';
import AddCourse from './pages/educator/AddCourse';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import CourseList from './pages/student/CourseList';
import CourseDetail from './pages/student/CourseDetail';
import MyEnrollement from './pages/student/MyEnrollement';
import Player from './pages/student/Player';

function App() {

  const isEducator = useMatch('/educator/*');

  return (
    <div className='text-default min-h-screen bg-white' >

    {!isEducator && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseList/:input?" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail /> } />
        <Route path="/my-enrollments" element={<MyEnrollement />} />
        <Route path="/player/:id" element={<Player/> } />
         <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
