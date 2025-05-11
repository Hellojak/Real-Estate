import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {

  const [showMobileMenu, setMobileMenu] = useState(false);
  useEffect(()=>{
if(showMobileMenu){
  document.body.style.overflow = 'hidden'
}else{
  document.body.style.overflow = 'auto'
}
return ()=>{
  document.body.style.overflow = 'auto'
}
  },[showMobileMenu])

  return (

    <div className='absolute bg-[rgba(9,29,53,1)] top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between 
        item-center py-3 px-2 md:px-20 lg:px-32 '>
        <img className='h-10 cursor-pointer rounded-xs' src={assets.logo1} alt='' />
        <ul className='hidden   md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block px-8 py-2 bg-white rounded-full cursor-pointer hover:text-gray-400' >Sign Up</button>
        <img onClick={()=>setMobileMenu(true)} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' />
      </div>
      {/* ---------------mobile menu------------------ */}

      <div className={`md:hidden ${showMobileMenu?'fixed w-full':'h-0 w-0'}  top-0 bottom-0 overflow-hidden bg-white`}>
        <div className='flex justify-end py-5 px-3'>
         
          <img onClick={()=>setMobileMenu(false)} src={assets.cross_icon} className='w-6 cursor-pointer' alt=""  />
        </div>
        
        <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium  transition-all'>
          <a onClick={()=>setMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=>setMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=>setMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={()=>setMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
      



    </div>


  )
}

export default Navbar