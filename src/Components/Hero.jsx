
import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';


export const Hero = () => {
  return (
    <>
     <Navbar/> 
       
       <Slider/> 
    <div id="hero" className="relative h-screen  bg-cover bg-center flex items-center justify-center ">

     <div className="hero p-8 ">
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center ">
        <h1 className="text-4xl md:text-6xl text-white font-bold"><span className='text-green-500'>Create your own business </span>&
Green Building Consultancy</h1>
        <p className="text-white text-lg md:text-2xl mt-2  ">Creating responsive designs with React and Tailwind CSS.</p>
        <a href="#services" className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
        Work with us
        </a>
    </div> 
    </div>
    </div>
    </>
  );
};


