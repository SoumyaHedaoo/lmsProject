import {createContext, useEffect, useState} from 'react';
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export const AppContextProvider =(props)=>{

    const navigate = useNavigate();
    
    const [allCourses , setAllCourses] = useState([])

    //fetching
    const fetchAllCourses = async()=>{
         setAllCourses(dummyCourses);
    }
    
    useEffect(()=>{
        fetchAllCourses();
    } , [])

    const value = {
        allCourses , navigate
    }
    
    return (
        
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    )
}