 //Offerings.js
 import React from 'react'
 import Navbar from '../Components/Navbar'
 function Offerings() {
   return (
     <>
         <Navbar />
         <div className="services">

         <div className='our-services text-center  text-3xl font-bold p-9 subpixel-antialiased ' id='card'>Our Servic<span className=' bg-sky-200'>es</span></div>

         <div className="boxes flex justify-center  ">

             <div className="card bg-[url('/src/green-architecture-3.jpg')] bg-cover pt-48  border-2 border-green-300 m-5 rounded-xl overflow-hidden h-72 text-white" >

                 <div className="card-body backdrop-blur-md border-1 h-screen ">
                     <h4 className=' font-bold text-sm p-2  '>Interiors & Turnkey Fitouts</h4>
                     <p className="card-text text-xm px-8">Design Construction Workshop.</p>
                 </div>
             </div>

             <div className="card bg-[url('/src/green-architecture-3.jpg')] bg-cover pt-48  border-2 border-green-300 m-5 rounded-xl overflow-hidden h-72 text-white " >

                 <div className="card-body backdrop-blur-md border-1 h-screen ">
                     <h4 className=' font-bold text-sm p-2 '>Interiors & Turnkey Fitouts</h4>
                     <p className="card-text text-xm px-8">Design Construction Workshop.</p>
                 </div>
             </div>

             <div className="card bg-[url('/src/green-architecture-3.jpg')] bg-cover pt-48  border-2 border-green-300 m-5 rounded-xl overflow-hidden h-72 text-white " >

                 <div className="card-body backdrop-blur-md border-1 h-screen ">
                     <h4 className=' font-bold text-sm p-2 '>Interiors & Turnkey Fitouts</h4>
                     <p className="card-text text-xm px-8">Design Construction Workshop.</p>
                 </div>
             </div>

             <div className="card bg-[url('/src/green-architecture-3.jpg')] bg-cover pt-48  border-2 border-green-300 m-5 rounded-xl overflow-hidden h-72 text-white " >

                 <div className="card-body backdrop-blur-md border-1 h-screen ">
                     <h4 className=' font-bold text-sm p-2 '>Interiors & Turnkey Fitouts</h4>
                     <p className="card-text text-xm px-8">Design Construction Workshop.</p>
                 </div>
             </div>


         </div>


     </div>

     {/* solar section -------*/}

     <div className="  bg-[url('/src/solar.jpg')]  bg-cover bg-center bg-no-repeat w-full h-auto overflow-hidden">
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
     </>
   )
 }

 export default Offerings
