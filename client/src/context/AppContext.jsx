import {createContext, useEffect, useState} from 'react';
import { dummyCourses } from '../assets/assets';

export const AppContext = createContext();

export const AppContextProvider =(props)=>{

    
    const [allCourses , setAllCourses] = useState([])

    //fetching
    const fetchAllCourses = async()=>{
         setAllCourses(dummyCourses);
    }
    
    useEffect(()=>{
        fetchAllCourses();
    } , [])

    const value = {
        allCourses ,
    }
    
    return (
        
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    )
}