import React from 'react';
import "../App.css";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Head = () => {
  const dispatch = useDispatch(); 

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
    console.log("Menu toggled");
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          className='h-8'
          onClick={toggleMenuHandler}
          alt='Toggle Menu'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwD9vnKk5oPrEHIthwjMIshbnqJgQDgdAvfA&s'
        />
        <Link to="/" >
          <img
            className='h-8 mx-2'
            alt='YouTube Logo'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s'
          />
        </Link>
      </div>
      <div className='col-span-10 px-10'>
        <input
          className='w-1/2 border border-gray-400 p-2 rounded-l-full'
          type='text'
        />
        <button
          className='border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full'
        >
          🔍
        </button>
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          alt='User Profile'
          src='https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg'
        />
      </div>
    </div>
  );
}

export default Head;
