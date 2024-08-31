import {v4 as uuidv4} from 'uuid';
import React, { useEffect,useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generate from '../utils/helper';

export const LiveChat = () => {
  const [inputlivemessage,setInputlivemessage] = useState("")
  const dispatch = useDispatch();
  const livemessage = useSelector((store) => store.chat.messages);
  // console.log("ChatMessage", livemessage);

  useEffect(() => {
    const i = setInterval(() => {
      //  console.log("Api pollling");
      //API Polling
      dispatch(
        addMessage({
          key: uuidv4(),     
          name: generate(),
          message: "Lorem Ipsum Dolor Site",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="w-full flex h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
     <div>
       {livemessage.map((data) => {     
         return (
           <ChatMessage
           name={data.name}
           message={data.message}
           />
          );
        })}
        </div>
    </div>
      <form className='flex w-full p-2 ml-2 rounded-lgx border border-black' onSubmit={(e)=>{
        e.preventDefault();
        console.log("submit");
        
        dispatch(addMessage({
          key: uuidv4(), 
          name:"Akshay saini",
          message:inputlivemessage,
        }))
      }}>
          <input className='px-2 w-96' type='text' 
          onChange={(e)=>setInputlivemessage(e.target.value)}
           />
         <button className='px-2 bg-green-200' >Sent</button>
      </form>
        </>
  );
};
