import React from 'react'
import { useSelector } from 'react-redux';

export const SideBar = () => {
 const isMenuOpen = useSelector(store => store.app.isMenuOpen);
//  console.log(isMenuOpen);
 
  const arr1 = ["Home","Shorts","Videos","Live"];
  const arr = ["Music","Sport","Gaming","Movies"];

  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        {arr1.map((data,i)=>(
          <li key={i}>{data}</li>
        ))}
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        {arr.map((data,i)=>(
          <li key={i}>{data}</li>
        ))}
      </ul>
      <h1 className='font-bold pt-5'>watch Later</h1>
      <ul>
        {arr.map((data,i)=>(
          <li key={i}>{data}</li>
        ))}
      </ul>
    </div>
  )
}
