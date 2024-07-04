import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
        <Link
        to = {destination}
        className='bg-sky-400 hover:bg-sky-800 text-white px-4 py-2 my-4 rounded-lg w-fit h-fit'
        >
            <BsArrowLeft className='text-2xl' />
        </Link>
    </div>
  )
}

export default BackButton