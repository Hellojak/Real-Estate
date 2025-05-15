import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb24795b-a860-4214-bd2c-e4873952e4b4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error('Submission error:', data);
        alert("Error: " + data.message);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Network error:', error);
      setResult("Failed to submit form");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
      id='Contact'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Contact with Us{' '}
        <span className='underline underline-offset-4 decoration-1 font-light'>
          With Us
        </span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Real Stories from Those Who Found Home with Us
      </p>

      {/* YouTube Live Stream Embed */}
      <div className='mb-12 flex justify-center'>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/live_stream?channel=UCt4t-jeY85JegMlZ-E5UWtA&autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Live Stream"
          className='w-full max-w-2xl aspect-video'
        />
      </div>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap gap-4'>
          <div className='w-full md:w-[calc(50%-0.5rem)] text-left'>
            <label>Your Name</label>
            <input
              type="text"
              placeholder='Your Name'
              required
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
            />
          </div>
          <div className='w-full md:w-[calc(50%-0.5rem)] text-left'>
            <label>Your Email</label>
            <input
              type="email"
              placeholder='Your Email'
              required
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
            />
          </div>
        </div>
        
        <div className='my-6 text-left'>
          <label>Message</label>
          <textarea
            className='border w-full border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name="Message"
            id="Message"
            placeholder='Message'
            required
          />
        </div>
        
        <button
          type='submit'
          className='bg-blue-600 text-white rounded px-6 py-3 hover:bg-blue-700 transition-colors'
        >
          {result || "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
