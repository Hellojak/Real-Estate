import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div 
    
    className='min-h-screen bg-center flex 
    items-center overflow-hidden bg-cover'
    style={{backgroundImage: "url('/real_estate.avif')"}} id='Header'>
        
        <Navbar/>

        <motion.div 
        initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='  text-shadow-lg
            inline-block text-[45px] font-semibold pt-55'>Explore Homes that fit your dreams</h2>
            <div className='space-x-6 mt-6'>
                <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
            </div>
        </motion.div>
        </motion.div>
  )
}

export default Header