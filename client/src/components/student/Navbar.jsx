import React from 'react'
import { Link } from "react-router-dom";
import { assets } from '../../assets/assets';;

const Navbar = () => {

    const isCourseListPage = location.pathname.includes('/CourseList');


  return (
    <div className={`flex item-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
        <img src={assets.logo} alt="Logo" className="w-16 h-16 object-contain rounded-full  lg:w-32 cursor-pointer " />
        <div classname ='hidden md:flex items-center gap-5 text-grey-500'>
            <div>
                <button> Become Educator</button>
                | <Link to='/my-enrollments'> My Enrollements</Link>
            </div>
            <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar