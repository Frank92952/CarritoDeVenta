import React from 'react'
import { RiHomeSmileFill,RiPercentFill,RiShoppingCart2Fill, RiMailFill,RiNotification2Fill, RiSettings2Fill, RiLogoutBoxRFill } from "react-icons/ri";

export default function Sidebar(props) {
    const { showMenu } = props;
  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}
    >
        <div>
        <ul className='pl-6'>
            <li>
            <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-6'>Logo</h1>
            </li>
            <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl '>
                <a href='#' className='bg-blue-500 p-4 flex justify-center rounded-xl text-white'>
                    <RiHomeSmileFill className='text-2xl' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-blue-500 p-4 flex justify-center rounded-xl text-blue-500 group-hover:text-white transition-colors'>
                    <RiPercentFill className='text-2xl' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-blue-500 p-4 flex justify-center rounded-xl text-blue-500 group-hover:text-white transition-colors'>
                    <RiMailFill className='text-2xl' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-blue-500 p-4 flex justify-center rounded-xl text-blue-500 group-hover:text-white transition-colors'>
                    <RiShoppingCart2Fill className='text-2xl' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-blue-500 p-4 flex justify-center rounded-xl text-blue-500 group-hover:text-white transition-colors'>
                    <RiNotification2Fill className='text-2xl' />
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-blue-500 p-4 flex justify-center rounded-xl text-blue-500 group-hover:text-white transition-colors'>
                    <RiSettings2Fill className='text-2xl' />
                </a>
            </li>
        </ul>
        </div>
        <div>
            <ul className='pl-6'>
                <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-blue-500 p-4 flex justify-center rounded-xl text-blue-500 group-hover:text-white transition-colors'>
                    <RiLogoutBoxRFill className='text-2xl' />
                </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
