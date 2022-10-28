import React from 'react'
import {MdAddBox} from "react-icons/md"

function Mainpage() {
  return (
    <div className='flex flex-col bg- h-screen bg-[#F9F9F9] items-center'>
        <h1 className='text-center mt-10  font-bold text-[20px] md:text-[30px] '>Hey, USER</h1>
        <h1 className='text-center m-5 font-bold text-[20px] md:text-[30px] '>Hey, What's the plan for today.</h1>
        <div className='justify-between shadow-md border-[0.5px]  w-screen max-w-[400px] md:max-w-[500px] border-gray-200 rounded-md  flex h-16 px-4 items-center bg-gradient-to-r from-[#00FFAB] to-[#00ffaaf4] '>
          <input type="text" className='h-[50px] w-[70%] rounded-md outline-none p-2 md:w-100%'/>
          <MdAddBox className='text-gray-500' size={50}/>
        </div>
    </div>
  )
}

export default Mainpage