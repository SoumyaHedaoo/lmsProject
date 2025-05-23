import React from 'react';
import { assets } from '../../assets/assets';

const CalltoAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text text-gray-800 font-semibold'>Learn , Anything , Anywhere</h1>
      <p className='text-gray-500 dm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ad architecto saepe sit doloribus dignissimos a ut quo fuga debitis</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600'>Get Started</button>
        <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="arrow_icon" /></button>
      </div>
    </div>
  )
}

export default CalltoAction;

