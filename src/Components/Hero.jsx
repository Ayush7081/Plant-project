
import React from 'react';
import Navbar from './Navbar';
import bg from '../image/bg.jpg';
import { Link } from "react-router-dom";

export const Hero = () => {

  return (
    <>
      <Navbar />


      <div className="relative bg-opacity-80 h-screen bg-cover flex items-center justify-center " style={{
    backgroundImage:  `url(${bg})`,  
  
  }}>

        <div className="hero p-8 ">
          <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center ">
            <h1 className="text-4xl md:text-6xl text-white font-bold"><span className='text-green-500'>Create your own business </span>&
              Green Building Consultancy</h1>
            <p className="text-white text-lg md:text-2xl mt-2  ">Creating responsive designs with React and Tailwind CSS.</p>
            <button className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform transition duration-300 hover:scale-105">
              <Link to={"/Formpage"}>Work with us</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


