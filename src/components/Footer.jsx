import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Footer = () => {
    return (
        <motion.div
        initial={{opacity:0, y:100}}
        transition={{duration:0.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}>

        <div className='p-5 pb-0 bg-gray-800 flex align-center justify-center gap-10 text-gray-400 max-[600px]:flex-col'>
            <div className='justify-center align-center'>
                <div className=''>
                    <img src={assets.dark_icon} alt="" className=' '/>
                    {/* <h1 className='absolute mt-2 ml-10 text-xl font-bold'>Estate</h1> */}
                </div>
                <p className='max-w-80 mx-auto pt-2 pb-2 max-[600px]:mx-0'>Lorem quisquam, repella cusamus voluptate dolore neque dicta, repellendus hic laboriosam.
                </p>
            </div>
            <div>
                <h1 className='text-white'>Company</h1>
                <ul className='flex flex-col pt-2 pb-2 '>
                    <a href="#Header">Home</a>
                    <a href="About">About</a>
                    <a href="#Contact">Contact Us</a>
                    <a href="Testimonials">Testimonials</a>
                </ul>
            </div>
            <div>
                <h1 className='text-white'>Subscribe to our newsletter</h1>
                <p className='pt-2 pb-2 max-w-80'>This label roa condit ca rk  akus .  asiadto dailajlkjdfal</p>
                <div className='flex pb-3'>
                    <input type="email" placeholder='Enter Your Email' className='border border-gray-600 w-40' />
                    <button>Subscribe</button>
                </div>
            </div>
           
        </div>
        <p className='bg-gray-600 text-gray-300 text-center text-sm'>
            Copyright 2025 © GreatStack. All Right Reserved.
        </p>
        </motion.div>
        
    )
}

export default Footer