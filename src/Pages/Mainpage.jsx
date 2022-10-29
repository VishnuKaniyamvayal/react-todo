import React,{useState} from 'react'
import {MdAddBox} from "react-icons/md"
import ListElement from "../components/ListElement"

function Mainpage(props) {
  const [todo,setTodo] = useState("")
  return (
    <div className='flex flex-col bg-[#F9F9F9] items-center scroll-m-0'>
        <div>
          <h1 className='text-center mt-10  font-bold text-[20px] md:text-[30px] '>Hey, USER</h1>
          <h1 className='text-center m-5 font-bold text-[20px] md:text-[30px] '>Hey, What's the plan for today.</h1>
          <div className='justify-between shadow-md border-[0.5px]  w-screen max-w-[400px] md:max-w-[500px] border-gray-200 rounded-md  flex h-16 px-4 items-center bg-gradient-to-r from-[#00FFAB] to-[#00ffaaf4] '>
            <input type="text" className='h-[50px] w-[70%] rounded-md outline-none p-2 md:w-100%' onChange={(e)=>{setTodo(e.target.value)}}/>
            <MdAddBox className='text-gray-500' size={50}/>
          </div>
        </div>
        <div className='grid md:grid-cols-2 w-full gap-x-4'>
          <div className=''>
            <h1 className='m-6 text-center flex flex-col'>TASKS</h1>
            <div className="flex flex-col items-center mx-4">
              <ListElement/>
              <ListElement/>
              <ListElement/>
            </div>
          </div>
          <div className=''>
            <h1 className='m-6 text-center flex flex-col'>COMPLETED</h1>
            <div className="flex flex-col items-center mx4">
              <ListElement/>
              <ListElement/>
              <ListElement/>
              <ListElement/>
            </div>
          </div>
        </div>
      <div className='flex flex-col'>
        <h1 className=' m-4 text-center text-[#14C38E] cursor'>Login</h1>
      </div>
    </div>
  )
}

export default Mainpage