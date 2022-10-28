import React from 'react'
import {GiCancel} from "react-icons/gi"

function ListElement() {
  return (
    <div className='px-8 mx-auto flex my-auto'>
        <div className='shadow-md border-[0.5px]  w-screen max-w-[400px] border-gray-200 rounded-md  justify-between flex h-16 px-4 items-center bg-gradient-to-r from-[#00FFAB] to-[#00ffaaf4]'>ELEMENT<GiCancel className='ml-2 text-gray-400 cursor-pointer' size={26}/></div>
        
    </div>
  )
}

export default ListElement