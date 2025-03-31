import React from 'react'
import {Atom} from 'react-loading-indicators';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Atom color="#32cd32" size="large" text="loading" textColor="#2d6bb0" />
    </div>
  )
}

export default Loading