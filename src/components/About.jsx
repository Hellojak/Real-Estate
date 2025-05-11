import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
    
    className='flex flex-col items-center p-14' id='About'>
        
<h1 className='text-2xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span> </h1>
<p className='max-w-80 text-center text-gray-500 mb-8'>Passionate About Properties, Dedicated to Your Vision</p>


<div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 '>
<img src={assets.logo} alt="" className='w-full sm:w-1/2 max-w-lg'/>
<div className='flex flex-col items-center md:items-start mt-10 text-gray=600'>
    <div className='grid grid-cols-2 gap-6 md:gap-10'>
        <div>
            <h1 className='font-bold'>10+</h1>
            <p>Years of Excellence</p>
        </div>
        <div>
            <h1 className='font-bold'>12+</h1>
            <p>Projects Completed</p>
        </div>
        <div>
            <h1 className='font-bold'>20+</h1>
            <p>Mr. Sq. Ft. Delivered</p>
        </div>
        <div>
            <h1 className='font-bold'>25+</h1>
            <p>Ongoing Projects</p>
        </div>
        <div className='col-span-2'>
        <p className='pb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eveniet quidem. <br />Ab officiis magni placeat nesciunt fugit dolor blanditiis,<br /> odio laboriosam explicabo, saepe soluta. Eligendi quod totam nam laudantium veniam?
            
        </p>
    </div>
    </div>
    
    <div className>
        <button  className='border bg-blue-700 text-white p-2 rounded-md
        cursor-pointer'>Learn More</button>
    </div>
</div>
    </div>
</motion.div>
  ) 
}

export default About