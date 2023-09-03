import React from 'react'

function Card(props) {
    const {img, description, price, inventory} = props;
  return (
    <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300'>
    <img src={img} className='w-40 h-40 object-cover shadow-2xl rounded-full -mt-20'/>
    <p className='text-2xl mt-4'>
      {description}
      </p>
      <p className='text-xl text-gray-400'>
      {price}
      </p>
      <p className='text-xl text-gray-600'>
      {inventory}
      </p>    
  </div>
  )
}

export default Card