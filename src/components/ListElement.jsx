import React from 'react'
import {GiCancel} from "react-icons/gi"
import{BiEdit} from "react-icons/bi"

function ListElement() {
  return (
    <div className='px-8 mx-auto flex  my-4'>
        <div className='shadow-md border-[0.5px]  w-screen max-w-[400px] border-gray-200 rounded-md  justify-between flex h-16 px-4 items-center bg-gradient-to-r from-[#00FFAB] to-[#00ffaaf4]'><p>ELEMENT</p>
          <div className='flex flex-row'>
            <BiEdit className='ml-4 text-gray-400 cursor-pointer' size={26}/>
            <GiCancel className='ml-4 text-gray-400 cursor-pointer' size={26}/>
          </div>
        </div>
        
    </div>
  )
}

export default ListElement