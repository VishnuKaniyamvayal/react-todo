import React from 'react'
import {CgUserlane} from "react-icons/cg"
import {useState} from "react"
import {getAuth,createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import  {db} from "../firebaseConfig"
import { addDoc, collection } from 'firebase/firestore'
import {useNavigate} from "react-router-dom"
function SignupCard() {
    const [loading, setLoading] = useState(false)
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate();
    const [redirect,setRedirect] = useState(false)

    const handlesubmit = (e)=>{
      setLoading(true)
      e.preventDefault();
      const collectionref = collection(db,"Users");
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email,password).then((result)=>{
        updateProfile(result.user,{displayName:name}).then(()=>{
          addDoc( collectionref ,{
            id:result.user.uid,
            username:name,
            Age:age
          })
        })
      })
      navigate("/login");
    }
  return (
    <div >
        <div className={`flex flex-col px-10 border-[2px] m-4 rounded-lg shadow-xl max-w-[465px] mx-auto z-100`}>
            <CgUserlane className={`mx-auto mt-6 ${loading?'animate-pulse':""} `} size={90}/>
            <input type="text" className={`border rounded-md mb-6 mt-12 h-12 pl-4 border-gray-400 `} placeholder='Enter your Name' onChange={(e)=>{setName(e.target.value)}}/>
            <input  type="number" className='border rounded-md h-12 mb-4 pl-4 border-gray-400' placeholder='Enter your Age' onChange={(e)=>{setAge(e.target.value)}}/>
            <input  type="text" className='border rounded-md h-12 mb-4 pl-4 border-gray-400' placeholder='Enter your E-mail' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input  type="password" className='border rounded-md h-12 mb-4 pl-4 border-gray-400' placeholder='Create a strong password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <div className='flex flex-row'>
                <button className='mb-4 bg-[#00FFAB] w-20 h-10 justify-center mx-auto rounded-md hover:bg-[#0df2a6] duration-300 focus:bg-[#14C38E] font-medium z-10' onClick={handlesubmit} >Login</button>
            </div>
            <p className='mx-auto m-2 mb-4'color>Already have a account?<a className='text-[#14C38E] cursor-pointer'>  Sign in</a></p>
        </div>
    </div>
  )
}

export default SignupCard