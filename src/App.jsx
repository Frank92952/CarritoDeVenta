import { useState } from 'react'
import { RiMenuFill, RiUser3Fill, RiAddFill, RiCloseCircleFill, RiArrowDownDoubleFill } from "react-icons/ri";
import Sidebar from './components/shared/Sidebar';
import Car from './components/shared/Car';
import Card from './components/shared/Card'
import Header from './components/shared/Header';
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
      <Car showOrder={showOrder} setShowOrder={setShowOrder}/>
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
    <main className='lg:pl-32 lg:pr-96 pb-20 p-2'>
      <div className=' md:p-8'>
        {/* header */}
        <Header />
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
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
              <Card img={Camiseta} description="Camiseta Inter Miami" price="$ 120.00"  inventory="20"/>
          </div>
      </div>

    </main>
   </div>
      
    
    
    </>
  )
}

export default App
