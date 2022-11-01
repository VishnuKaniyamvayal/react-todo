import React from 'react'
import {CgUserlane} from "react-icons/cg"
import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"

function LoginCard() {
  const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    
    const handlesubmit = (e)=>{
      e.preventdefault()
      const auth = getAuth()
      signInWithEmailAndPassword(auth,email,password).then(()=>{navigate("/home")})
    }

    return (
    <div >
        <div className={`flex flex-col px-10 border-[2px] m-4 rounded-lg shadow-xl max-w-[465px] mx-auto z-100 `}>
            <CgUserlane className={`mx-auto mt-6 ${loading?'animate-pulse':""} `} size={90}/>
            <input type="text" className={`border rounded-md mb-6 mt-12 h-12 pl-4 border-gray-400 `} placeholder='Enter your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input  type="text" className='border rounded-md h-12 mb-4 pl-4 border-gray-400' placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <div className='flex flex-row'>
                <button className='mb-4 bg-[#00FFAB] w-20 h-10 justify-center mx-auto rounded-md hover:bg-[#0df2a6] duration-300 focus:bg-[#14C38E] font-medium z-10' onClick={()=>{setLoading(true).then(handlesubmit())}}>Login</button>
            </div>
            <p className='mx-auto m-2 mb-4'color>New user? <a className='text-[#14C38E] cursor-pointer'>  Sign up</a></p>
        </div>
    </div>
  )
}

export default LoginCard