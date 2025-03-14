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

    const calculateRating=(course)=>{
        if(course.courseRatings.length===0){
            return 0;
        }

        let totalRating =0;
        course.courseRatings.forEach(rating =>{
            totalRating+=rating.rating
        })
        return totalRating/course.courseRatings.length;

    }
    
    useEffect(()=>{
        fetchAllCourses();
    } , [])

    const value = {
        allCourses , navigate , calculateRating , 
    }
    
    return (
        
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    )
}