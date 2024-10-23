import React from 'react';

import Cards from './Cards';
export const Services = () => {
    return (
        
        <div>
            <div className="services ">

    <Cards/>

            </div>

            {/* solar section -------*/}

            <div className="  bg-[url('/src/solar.jpg')]  bg-cover bg-center bg-no-repeat w-full h-auto overflow-hidden mt-8">
                <h2 className='text-center p-9 text-3xl font-medium text-white bg-contain underline backdrop-blur-sm'>What We Do</h2>
                <p className='text-center p-3  font-normal text-white  '>We’re making the energy transition process <br></br>happen. For real. our
                    activities will have zero net impact on the climate in terms of carbon
                    emissions and extraction.</p>
                <div className="button-body text-center p-5 ">
                    <a href="https://www.google.co.in/" className="mt-4 inline-block md:px-5 md:py-1  px-7 py-2 bg-blue-600 text-white rounded-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                        Work with us
                    </a>
                </div>

                <div className="record flex text-white backdrop-blur-md m-9 justify-center h-32 text-center ">

                    <div className="px-9 ">
                        <h4 className='text-xl'>Client Served</h4>
                        <p className='text-3xl p-2 font-semibold'>1050+</p></div>
                    <div className="px-9 border-l-2 h-16 border-white ">
                        <h4 className='text-xl'>Project Completed</h4>
                        <p className='text-3xl p-2 font-semibold'>2000+</p></div>
                    <div className="px-9  border-l-2 h-16 border-white">
                        <h4 className='text-xl '>Industries</h4>
                        <p className='text-3xl p-2 font-semibold'>30+</p></div>
                    <div className="px-9 border-l-2 h-16 border-white">
                        <h4 className='text-xl '>Transformation</h4>
                        <p className='text-3xl p-2 font-semibold'>1000+</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
