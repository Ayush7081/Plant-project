import React from 'react';
import {Link} from "react-router-dom";
import Cards from './Cards';
export const Services = () => {
    return (

        <div>
            {/* card section */}
            <div className="services text-center p-5 w-fit rounded-lg bg-green-100">
                <h2 className='text-5xl font-bold text-orange-700 p-4'>Our Serv<span className='text-blue-500'>ices</span></h2>
                <p className='text-base font-medium text-gray-600 p-3'>At [Vision Picker], we offer a comprehensive range of services designed to meet your unique needs. From innovative technology solutions to personalized customer support, our team is dedicated to delivering excellence at every step.</p>
            </div>
            <Cards />

{/* what we do */}

<div className="flex flex-col md:flex-row  p-4">
      {/* Box 1 */}
      <div className="flex-1  bg-green-100 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className=" text-yellow-600 p-4 "><span className='text-8xl font-extrabold'> What  </span> <span className='text-green-700 font-bold text-7xl'> we </span><span className='font-bold text-6xl'>do ?</span></h3>
   
      </div>

      {/* Box 2 */}
      <div className="flex-1 bg-green-100 p-6  shadow-md hover:shadow-lg transition-shadow duration-300 ">
        <h3 className="md:text-4xl text-4xl font-semibold text-yellow-600 p-4 border-l-4 border-orange-500">Boost Your Brand Visibility</h3>
        <p className="text-green-700 mt-6 md:text-xl text-lg text-justify">We help businesses build a strong online presence with customized digital marketing strategies, including SEO, content marketing, and social media management. Our goal is to make your brand stand out, attract more visitors, and engage your audience effectively.</p>
        <button className="animate-bounce mt-6 inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-green-700 transform transition duration-300 hover:scale-105">
           <Link to={"/About"}>  About--</Link>
            </button>
      </div>

      {/* Box 3 */}
      <div className="flex-1  bg-green-100 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="md:text-4xl text-4xl  font-semibold text-yellow-600 p-4 border-l-4 border-orange-500"> Drive Conversions and Growth</h3>
        <p className="text-green-700 mt-6 md:text-xl text-lg text-justify">Our data-driven approach ensures that every campaign, from PPC to email marketing, is designed to convert leads into loyal customers. We continuously optimize to maximize ROI, helping your business grow in the competitive digital landscape.</p>
        <button className="animate-bounce mt-6 inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-green-700 transform transition duration-300 hover:scale-105">
              <Link to={"/Offerings"}>Our Services--</Link>
            </button>
      </div>
    </div>
        </div>
    )
}
