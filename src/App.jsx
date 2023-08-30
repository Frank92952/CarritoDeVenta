import { useState } from 'react'
import { RiMenuFill, RiUser3Fill, RiAddFill, RiCloseCircleFill, RiSearchEyeFill, RiArrowDownDoubleFill } from "react-icons/ri";
import Sidebar from './components/shared/Sidebar'


function App() {
  const [showMenu, setShowMenu]=useState(false);
  const [showOrder, setShowOrder]=useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
   <div className='bg-[#262837] w-full min-h-screen'>
      <Sidebar showMenu={showMenu} />

    <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-white py-2 px-8 flex items-center justify-between'>
     <button className='p-2'>
     <RiMenuFill />
     </button>
     <button className='p-2'>
     <RiUser3Fill />
     </button>
     <button className='p-2'>
     <RiAddFill />
     </button>
     <button onClick={toggleMenu} className='text-white p-2'>
      {showMenu ? <RiCloseCircleFill />: <RiMenuFill />}
     </button>
    </nav>
    <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4'>
      <div className='lg:col-span-6'>
        {/* header */}
        <header >
          {/* title ande search */}
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
            <div>
              <h1 className='text-2xl text-gray-300'>Venta De Ropa Deportiva</h1>
              <p className='text-xl text-gray-500'>29 de Oct del 2023</p>
            </div>
            <form>
              <div className='w-full relative'>
                <RiSearchEyeFill className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 '/>
              <input type="text" className='bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-white outline-none' 
              placeholder='Buscador'
              />
              </div>
            </form>
          </div>
          {/* tabs */}
          <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b'>
            <a href='#' className='relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-blue-500 before:left-0 
            before:rounded-full before:bottom-[-1px] text-blue-500'>Hot Dishes</a>
            <a href='#' className=' py-2 pr-4 '>Hot Dishes</a>
            <a href='#' className=' py-2 pr-4 '>Hot Dishes</a>
            <a href='#' className=' py-2 pr-4'>Hot Dishes</a>
      
          </nav>

        </header>
          {/* title contents */}
          <div className='flex items-center justify-between '>
            <h2 className='text-xl text-gray-300'>Choose Distributs</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
              <RiArrowDownDoubleFill /> Dine IN
            </button>
          </div>
          {/* Content */}
          <div>
            <div>
              {/* Card */}
              
            </div>

          </div>
      </div>
      <div className='lg:col-span-2 fixed lg:static right-0'>
        HOLA 2
      </div>
    </main>
   </div>
      
    
    
    </>
  )
}

export default App
