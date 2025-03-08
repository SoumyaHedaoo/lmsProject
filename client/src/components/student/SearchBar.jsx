import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = (props) => {
  
    const navigate = useNavigate();
    const [input , setInput] =useState(props.data ? props.data : '');
  
    const onSearchhandler = (e)=>{
        e.preventDefault();
        navigate('/CourseList/'+ input);
    }
  
  
    return (
   
    <form action="" onSubmit={onSearchhandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/200 rounded'>
        <img src={assets.search_icon} alt="search-icon" className='md:w-auto w-10 px-3'/>
        <input onChange={(e)=>{setInput(e.target.value)}}type="text" placeholder='Search For Course...'className='w-full h-full outline-none text-gray-500/80 '/>
        <button type='submit' className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1 cursor-pointer '>Search</button>
    </form>
  )
}

export default SearchBar