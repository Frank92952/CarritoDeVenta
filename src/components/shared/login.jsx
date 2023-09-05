import React from 'react'
import Usuario from '../img/User.png'

import { RiCloseCircleFill, RiUser3Line, RiUser3Fill,RiLockPasswordFill} from "react-icons/ri";
function login(props) {
    const {showLogin, setShowLogin} = props;
  return (
    <div className={` lg:bg-blue-500 fixed  top-0 bg-[#262837] w-full h-full z-50    ${showLogin ? 'right-0' : '-right-full'}`}>
      <div className=''>
      <div className=' relative pt-15 text-gray-300 p-4 '>
        <RiCloseCircleFill  onClick={() => setShowLogin(false)} className=' top-2 left-2  box-content bg-[#1F1D2B] text-white rounded-full text-xl'  />
        </div>
        <form className='  py-20 px-4  '>
        <div className='py-4 px-4 bg-white bg-opacity-70 w-full p-5  rounded-2xl '>
          <div className='flex justify-center'>
          <RiUser3Line className='rounded-full p-1 bg-[#262837]  w-28 h-28 text-white -mt-16  ' />
          </div>
        
          <div className='relative py-6'>
            <RiUser3Fill className='absolute  bg-[#262837] h-12 w-8  text-white' />
          <input type='text' className='w-full h-12 pl-10 bg-[#4c4c51] text-white  outline-none  ' placeholder='Email ID' />
          
          </div>
          <div className='relative -mt-4  '>
            <RiLockPasswordFill className='absolute  bg-[#262837] h-12 w-8  text-white' />
          <input type='password' className='w-full h-12 pl-10 bg-[#4c4c51] text-white  outline-none  ' placeholder='Password' />
          </div> 
          <div className='flex mb-10 mt-10 ml-2'>
          <input type="checkbox" className=" form-checkbox text-indigo-600 h-5 w-5 checked:bg-indigo-600 outline-none" />
           <p className='text-[#262837] '>Recordarme</p>
           <p className='ml-6 '>¿olvidastes la contraseña?</p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="p-4 bg-white bg-opacity-70 w-60 h-16 rounded-br-3xl rounded-bl-3xl ">
            <h2 className='text-center text-white text-2xl'>Login</h2>
          </div>
        </div>
        </form>
      </div>
 

    </div>
  )
}

export default login