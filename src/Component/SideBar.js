import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  const arr1 = ["Home", "Shorts", "Demo", "Videos", "Live"];
  const arr = ["Music", "Sport", "Gaming", "Movies"];

  if (!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
        {arr1.map((data, i) => (
      <ul>
          
            {data === "Home" ? (
              <Link to="/"><li key={i}>{data}</li></Link>
            ) : data === "Demo" ? (
              <Link to="/demo"><li key={i}>{data}</li></Link>
            ) : (
              <li key={i}>{data}</li>
            )}
          
      </ul>
        ))}
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        {arr.map((data, i) => (
          <li key={i}>{data}</li>
        ))}
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        {arr.map((data, i) => (
          <li key={i}>{data}</li>
        ))}
      </ul>
    </div>
  );
}