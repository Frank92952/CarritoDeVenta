import { useState } from 'react'
import { RiMenuFill, RiUser3Fill, RiAddFill, RiCloseCircleFill, RiSearchEyeFill, RiArrowDownDoubleFill, RiDeleteBin6Fill } from "react-icons/ri";
import Sidebar from './components/shared/Sidebar'
import Camiseta from './components/img/camiseta.png'

function App() {
  const [showMenu, setShowMenu]=useState(false);
  const [showOrder, setShowOrder]=useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };
   const toggleOrder = () => {
      setShowOrder(!showOrder)
      setShowMenu(false);
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
     <button onClick={toggleOrder} className='p-2'>
     <RiAddFill />
     </button>
     <button onClick={toggleMenu} className='text-white p-2'>
      {showMenu ? <RiCloseCircleFill />: <RiMenuFill />}
     </button>
    </nav>
    <main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20'>
      <div className='lg:col-span-6 md:p-8'>
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
          <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6'>
            <a href='#' className='relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-blue-500 before:left-0 
            before:rounded-full before:bottom-[-1px] text-blue-500'>Hot Dishes</a>
            <a href='#' className=' py-2 pr-4 '>Hot Dishes</a>
            <a href='#' className=' py-2 pr-4 '>Hot Dishes</a>
            <a href='#' className=' py-2 pr-4'>Hot Dishes</a>
      
          </nav>

        </header>
          {/* title contents */}
          <div className='flex items-center justify-between mb-16 '>
            <h2 className='text-xl text-gray-300'>Choose Distributs</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
              <RiArrowDownDoubleFill /> Dine IN
            </button>
          </div>
          {/* Content */}
          <div className='p-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-16 '>
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>
               {/* Card */}
               <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>                           
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>      
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>      
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>                                              
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>  
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>  
              {/* Card */}
              <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
                <img src={Camiseta} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
                <p className='text-2xl mt-4'>
                  Camiseta Inter Miami
                  </p>
                  <p className='text-xl text-gray-400'>
                  $ 120.00
                  </p>
                  <p className='text-xl text-gray-600'>
                  Color rosado talla S
                  </p>    
              </div>  

          </div>
      </div>
      <div className={`lg:col-span-2  fixed  top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full   ${showOrder ? 'right-0' : '-right-full'}`}>
        {/* Orders */}
        <div className='relative pt-15 text-gray-300 p-4 h-full'>
          <RiCloseCircleFill onClick={toggleOrder} className='lg:hidden absolute top-2 left-2  box-content bg-[#1F1D2B] text-white rounded-full text-xl' />
          <h1 className='text-2xl py-4'>Orders #15456</h1>
          {/* Buttons */}
          <div className='flex items-center gap-4 flex-wrap mb-8'>
            <button className='bg-blue-500 text-white py-2 px-4 rounded-xl'>Dine in
            </button>
            <button className='text-blue-500  py-2 px-4 rounded-xl border border-gray-500'>Dine in
            </button>
            <button className='text-blue-500  py-2 px-4 rounded-xl border border-gray-500'>Dine in
            </button>
          </div>
          {/* Cars */}
          <div>
            <div className='grid grid-cols-6 p-4'>
              <h5 className='col-span-4'>Items</h5>
              <h5 className='col-span-1'>Items</h5>
              <h5 className='col-span-1'>Items</h5>
            </div>
            {/* Products */}
            <div className='h-[470px] md:h-[750px] lg:h-[750px] overflow-scroll scrollbar-hide'>
              {/* Product */}
              <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4' >
                  {/* Descripcion product */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src={Camiseta} className='w-10 h-10 object-cover rounded-full' />
                      <div>
                        <h5 className='text-sm'>Spacia Seaseon</h5>
                        <p className='text-xs'>$/. 156.23</p>
                      </div>
                  </div>
                  {/* Cant */}
                  <div >
                    <span>2</span>
                  </div>
                  {/* Precio*/}
                  <div>
                    <span>10</span>
                  </div>
                </div>
                {/* Note*/}
                <div className='grid grid-cols-6 items-center '>
                  <form className='col-span-5'>
                    <input type="text" className='bg-[#1F1D2B] py-2 px-7 rounded-lg outline-none' placeholder='Order note'></input>
                  </form>
                  <div >
                    <button className='border border-red-500 p-2 rounded-lg'>
                      <RiDeleteBin6Fill className='text-red-500'/>
                    </button>
                  </div>
                </div>   
              </div>
              {/* Product */}
              <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4' >
                  {/* Descripcion product */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src={Camiseta} className='w-10 h-10 object-cover rounded-full' />
                      <div>
                        <h5 className='text-sm'>Spacia Seaseon</h5>
                        <p className='text-xs'>$/. 156.23</p>
                      </div>
                  </div>
                  {/* Cant */}
                  <div >
                    <span>2</span>
                  </div>
                  {/* Precio*/}
                  <div>
                    <span>10</span>
                  </div>
                </div>
                {/* Note*/}
                <div className='grid grid-cols-6 items-center '>
                  <form className='col-span-5'>
                    <input type="text" className='bg-[#1F1D2B] py-2 px-7 rounded-lg outline-none' placeholder='Order note'></input>
                  </form>
                  <div >
                    <button className='border border-red-500 p-2 rounded-lg'>
                      <RiDeleteBin6Fill className='text-red-500'/>
                    </button>
                  </div>
                </div>   
              </div>
              {/* Product */}
              <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4' >
                  {/* Descripcion product */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src={Camiseta} className='w-10 h-10 object-cover rounded-full' />
                      <div>
                        <h5 className='text-sm'>Spacia Seaseon</h5>
                        <p className='text-xs'>$/. 156.23</p>
                      </div>
                  </div>
                  {/* Cant */}
                  <div >
                    <span>2</span>
                  </div>
                  {/* Precio*/}
                  <div>
                    <span>10</span>
                  </div>
                </div>
                {/* Note*/}
                <div className='grid grid-cols-6 items-center '>
                  <form className='col-span-5'>
                    <input type="text" className='bg-[#1F1D2B] py-2 px-7 rounded-lg outline-none' placeholder='Order note'></input>
                  </form>
                  <div >
                    <button className='border border-red-500 p-2 rounded-lg'>
                      <RiDeleteBin6Fill className='text-red-500'/>
                    </button>
                  </div>
                </div>   
              </div>
              {/* Product */}
              <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4' >
                  {/* Descripcion product */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src={Camiseta} className='w-10 h-10 object-cover rounded-full' />
                      <div>
                        <h5 className='text-sm'>Spacia Seaseon</h5>
                        <p className='text-xs'>$/. 156.23</p>
                      </div>
                  </div>
                  {/* Cant */}
                  <div >
                    <span>2</span>
                  </div>
                  {/* Precio*/}
                  <div>
                    <span>10</span>
                  </div>
                </div>
                {/* Note*/}
                <div className='grid grid-cols-6 items-center '>
                  <form className='col-span-5'>
                    <input type="text" className='bg-[#1F1D2B] py-2 px-7 rounded-lg outline-none' placeholder='Order note'></input>
                  </form>
                  <div >
                    <button className='border border-red-500 p-2 rounded-lg'>
                      <RiDeleteBin6Fill className='text-red-500'/>
                    </button>
                  </div>
                </div>   
              </div>
              {/* Product */}
              <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4' >
                  {/* Descripcion product */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src={Camiseta} className='w-10 h-10 object-cover rounded-full' />
                      <div>
                        <h5 className='text-sm'>Spacia Seaseon</h5>
                        <p className='text-xs'>$/. 156.23</p>
                      </div>
                  </div>
                  {/* Cant */}
                  <div >
                    <span>2</span>
                  </div>
                  {/* Precio*/}
                  <div>
                    <span>10</span>
                  </div>
                </div>
                {/* Note*/}
                <div className='grid grid-cols-6 items-center '>
                  <form className='col-span-5'>
                    <input type="text" className='bg-[#1F1D2B] py-2 px-7 rounded-lg outline-none' placeholder='Order note'></input>
                  </form>
                  <div >
                    <button className='border border-red-500 p-2 rounded-lg'>
                      <RiDeleteBin6Fill className='text-red-500'/>
                    </button>
                  </div>
                </div>   
              </div>
              {/* Product */}
              <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4' >
                  {/* Descripcion product */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src={Camiseta} className='w-10 h-10 object-cover rounded-full' />
                      <div>
                        <h5 className='text-sm'>Spacia Seaseon</h5>
                        <p className='text-xs'>$/. 156.23</p>
                      </div>
                  </div>
                  {/* Cant */}
                  <div >
                    <span>2</span>
                  </div>
                  {/* Precio*/}
                  <div>
                    <span>10</span>
                  </div>
                </div>
                {/* Note*/}
                <div className='grid grid-cols-6 items-center '>
                  <form className='col-span-5'>
                    <input type="text" className='bg-[#1F1D2B] py-2 px-7 rounded-lg outline-none' placeholder='Order note'></input>
                  </form>
                  <div >
                    <button className='border border-red-500 p-2 rounded-lg'>
                      <RiDeleteBin6Fill className='text-red-500'/>
                    </button>
                  </div>
                </div>   
              </div>
            </div>
          </div>
          {/* Submit padiment */}
          <div className='bg-[#262837] absolute bottom-0 left-0 w-full p-4 '>
          <div className='flex items-center justify-between mb-4'>
              <span className='text-gray-400'>Descuento</span>
              <span>$/.0</span>
          </div>
          <div className='flex items-center justify-between mb-6'>
              <span className='text-gray-400'>Descuento</span>
              <span>$/.0</span>
          </div>
          <div>
            <button className='bg-blue-500 rounded-lg w-full py-2 px-4'>
              Continue to Paviment
            </button>
          </div>
          </div>
        </div>
      </div>
    </main>
   </div>
      
    
    
    </>
  )
}

export default App
