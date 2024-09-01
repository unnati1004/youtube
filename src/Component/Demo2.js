import React,{useEffect, useRef, useState} from 'react'

export const Demo2 = () => {
     const ref = useRef(0);
     const [value,setValue] = useState(0)
     let x = 0;
     const i = useRef(null);
     useEffect(()=>{
          if(i.current) return
           i.current = setInterval(()=>{
               console.log("Namaste React",Math.random());
          },1000);
          return()=> clearInterval(i.current);
     })

  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
     <div className='flex'>
          <button
          className='bg-green-200 px-2 m-2'
            onClick={()=>{
               x=x+1;
               console.log(x);
               
            }}
          >
               Increase x
          </button>
          <h1 className='font-bold text-xl'> Let = {x} </h1>
     </div>
     <div className='flex'>
          <button
          className='bg-green-200 px-2 m-2'
            onClick={()=>{
               setValue(value+1)
               // console.log(x);
               
            }}
          >
               Increase y
          </button>
          <h1 className='font-bold text-xl'> State = {value} </h1>
     </div>
     <div className='flex'>
          <button
          className='bg-green-200 px-2 m-2'
            onClick={()=>{
               ref.current = ref.current + 1
               // setValue(value+1)
               // console.log(x);
               
            }}
          >
               Increase Ref
          </button>
          <h1 className='font-bold text-xl'> Ref = {ref.current} </h1>
     </div>
     <button className='bg-red-950 text-white p-2' onClick={()=>clearInterval(i.current)} >Stop Priniting</button>
    </div>
  )
}
