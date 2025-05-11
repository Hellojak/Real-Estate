import React from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb24795b-a860-4214-bd2c-e4873952e4b4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult();
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log('');
      alert("Error", data)
      setResult(data.message);
    }
  };


  return (
    <motion.div
    initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>

<h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact with Us <span className='underline
underline-offset-4 decoration-1 under font-light'>
    With Us</span></h1>
    <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Real Stories from Those Who Found Home with Us
    </p>



    <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full  md:w-1/2 text-left'>
                Your Name
                <input type="text" placeholder='Your Name' required 
                className='w-full border border-gray-300 rounded py-3 px-4 mt-2'/>
            </div>
            <div className='w-full  md:w-1/2 text-left'>
                Your Email
                <input type="email" placeholder='Your Email' required 
                className='w-full border border-gray-300 rounded py-3 px-4 mt-2'/>
            </div>
        </div>
        <div className='my-6 text-left'>
            Message
            <textarea className='border w-full border-gray-300 rounded py-3
            px-4 mt-2 h-48 resize-none'
             name="Message" id="Message" placeholder='Message' required></textarea>

        </div>
        <button className='bg-blue-600 text-white rounded p-2'>{onSubmit? setResult: result}Send Message</button>
    </form>
    </motion.div>
  )
}

export default Contact