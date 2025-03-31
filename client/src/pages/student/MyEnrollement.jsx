import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {Line} from 'rc-progress'
import Footer from '../../components/student/Footer';


const MyEnrollement = () => {
    const {myCourses ,calCourseDuration , navigate} = useContext(AppContext);

    const [progressArr , setProgressArr] =useState([
        {completed :1 , total :4},
        {completed :5 , total :5},
        {completed :2 , total :6},
        {completed :6 , total :10},
        {completed :2 , total :5},
        {completed :7 , total :7},
        {completed :2 , total :9},
        {completed :0, total :6},
        {completed :2 , total :2},
        {completed :3 , total :7},
        {completed :4 , total :4},
        {completed :6 , total :9},
        {completed :3 , total :4},
        {completed :0 , total :6},



    ])

  return (
    <>
    <div className='md:px-36 px-8 pt-10'>
        <h1 className='text-2xl font-semibold'>
            My Enrollements
        </h1>
        <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
            <thead className='text-gray-900 border-b border-white-500/20 text-sm text-left max-sm:hidden'>
                <tr>
                    <th className='px-4 py-3 font-semibold truncate'>Course</th>
                    <th className='px-4 py-3 font-semibold truncate'>Duration</th>
                    <th className='px-4 py-3 font-semibold truncate'>Completed</th>
                    <th className='px-4 py-3 font-semibold truncate'>Status</th>

                </tr>
            </thead>
            <tbody className='text-gray-700'>
                {
                    myCourses.map((courses , index)=>(
                        <tr key={index} className='border-b border-gray-500/20'>
                            <td className='md:px-4 pt-2 md:pl-4 py-3 flex items-scenter space-x-3'>
                                <img src={courses.courseThumbnail} alt="" className='w-14 sm:w-24 md:w-28'/>
                                <div className='flex-1'>
                                <p className='mb-1 max-sm:text-sm'>{courses.courseTitle}</p>
                                <Line strokeWidth={2} percent={progressArr[index] ? (progressArr[index].completed *100)/progressArr[index].total : 0 }className='bg-gray-300 rounded-full' />

                            </div>
                            </td>
                           
                            <td className='px-4 py-3 max-sm:hidden'>
                                {calCourseDuration(courses)}
                            </td>
                            <td className='py-4 py-3 max-sm:hidden'>
                                {progressArr[index] && `${progressArr[index].completed} / ${progressArr[index].total}`} <span>Lectures</span>
                            </td>
                            <td className='px-4 py-3 max-sm:text-right'>
                                <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white" onClick={()=>navigate('/player/'+ courses._id)}>
                                    {progressArr[index] && progressArr[index].completed === progressArr[index].total ? 'Completed' : 'In Progress'}
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    <Footer />
    </>
  )
}

export default MyEnrollement