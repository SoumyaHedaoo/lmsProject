import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import CourseCard from './CourseCard'
import { AppContext } from '../../context/AppContext';


const CourseSection = () => {

  const {allCourses} =useContext(AppContext);
  return (
    <div className='py-16 md:px-40 px-8'>
        <h2 className='text-3xl font-medium text-gray-800'>Learn From the Best</h2>
        <p className='text-sm md:text-based text-gray-500 mt-3'>Discover our top-rated cours across varios categories . from coding and design to buisness and wellness , our course are crafted to deliver results</p>

      <div className='grid grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0 , 4).map((course , index)=>(<CourseCard key={index} props={course} />))}
        
      </div>


        <Link to={'/CourseList'} onClick={()=> scrollTo(0 , 0)} className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"> Show All Courses</Link>
    </div>
  )
}

export default CourseSection