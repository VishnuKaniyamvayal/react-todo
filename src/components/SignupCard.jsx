import React from 'react'
import {CgUserlane} from "react-icons/cg"
import {useState} from "react"

function SignupCard() {
    const [loading, setLoading] = useState(false)
  return (
    <div >
        <div className={`flex flex-col px-10 border-[2px] m-4 rounded-lg shadow-xl max-w-[465px] mx-auto z-100`}>
            <CgUserlane className={`mx-auto mt-6 ${loading?'animate-pulse':""} `} size={90}/>
            <input type="text" className={`border rounded-md mb-6 mt-12 h-12 pl-4 border-gray-400 `} placeholder='Enter your Name'/>
            <input  type="number" className='border rounded-md h-12 mb-4 pl-4 border-gray-400' placeholder='Enter your Age'/>
            <input  type="text" className='border rounded-md h-12 mb-4 pl-4 border-gray-400' placeholder='Enter your E-mail'/>
            <input  type="text" className='border rounded-md h-12 mb-4 pl-4 border-gray-400' placeholder='Create a strong password'/>
            <div className='flex flex-row'>
                <button className='mb-4 bg-[#00FFAB] w-20 h-10 justify-center mx-auto rounded-md hover:bg-[#0df2a6] duration-300 focus:bg-[#14C38E] font-medium z-10' onClick={()=>{setLoading(true)}}>Login</button>
            </div>
            <p className='mx-auto m-2 mb-4'color>Already have a account?<a className='text-[#14C38E] cursor-pointer'>  Sign in</a></p>
        </div>
    </div>
  )
}

export default SignupCard