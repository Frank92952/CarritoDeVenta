import React from 'react'
import {  RiSearchEyeFill } from "react-icons/ri";
function Header() {
  return (
    <header >
    {/* title ande search */}
    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 p-2'>
      <div>
        <h1 className='text-2xl text-gray-300'>Venta De Ropa Deportiva</h1>
        <p className='text-xl text-gray-500'>29 de Oct del 2023</p>
      </div>
      <form>
        <div className='w-full relative '>
          <RiSearchEyeFill className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300  '/>
        <input type="text" className='bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-white outline-none' 
        placeholder='Buscador'
        />
        </div>
      </form>
    </div>
    {/* tabs */}
    <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6   '>
      <a href='#' className='relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-blue-500 before:left-0 
      before:rounded-full before:bottom-[-1px] text-blue-500 '>Hot Dishes</a>
      <a href='#' className=' py-2 pr-4 '>Hot Dishes</a>
      <a href='#' className=' py-2 pr-4 '>Hot Dishes</a>
      <a href='#' className=' py-2 pr-4'>Hot Dishes</a>

    </nav>

  </header>
  )
}

export default Header