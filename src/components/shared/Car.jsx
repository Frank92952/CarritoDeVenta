import React from 'react'
import { RiCloseCircleFill, RiDeleteBin6Fill } from "react-icons/ri";
import Camiseta from '../img/camiseta.png'
const  Card = (props) => {

        const {showOrder, setShowOrder} = props
    
  return (
    <div className={`lg:col-span-2  fixed  top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full z-50   ${showOrder ? 'right-0' : '-right-full'}`}>
    {/* Orders */}
    <div className='relative pt-15 text-gray-300 p-4 h-full'>
      <RiCloseCircleFill onClick={() => setShowOrder(false)} className='lg:hidden absolute top-2 left-2  box-content bg-[#1F1D2B] text-white rounded-full text-xl' />
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
        <div className='h-[470px] md:h-[750px] lg:h-[750px] overflow-scroll scrollbar-none'>
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
  )
}

export default Card