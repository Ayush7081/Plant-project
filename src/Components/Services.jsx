import React from 'react'


export const Services = () => {
    return (
        // export const Services = () => {
            //     const items =[
            //         {
            //             imgSrc:'',
            //             title: 'Service 1',
            //             description: 'This is a description of service 1.',
            //             link: '#',
            
            //         },
            //         {
            //             imgSrc:'',
            //             title: 'Service 1',
            //             description: 'This is a description of service 1.',
            //             link: '#',
                        
            //         },
            //         {
            //             imgSrc:'',
            //             title: 'Service 1',
            //             description: 'This is a description of service 1.',
            //             link: '#',
                        
            //         },
            //         {
            //             imgSrc:'',
            //             title: 'Service 1',
            //             description: 'This is a description of service 1.',
            //             link: '#',
                        
            //         },
            //     ]
            //     return (
            //         <div>   
            //         <div className="services w-auto h-screen m-6  ">
            //             <div className="overflow-x-auto flex gap-2 ">
            //                 {items.map((item,index)=>(
            //                     <div key={index}
            //                     className='min-w-[300px] bg-blue-300 flex flex-col p-4 items-center justify-between'>
            //                         <img src={item.imgSrc}
                                    
            //                         alt={item.imgSrc} 
            //                         className='w-full h-40 object-cover rounded-2xl
            //                         '/>
            //                         <h2 className='text-lg mt-4  font-bold'>{item.title}</h2>
            //                         <p className='text-sm mt-2'>{item.description}</p>
            //                         <button className='mt-4 bg-blue-100 text-black hover:text-blue-100 px-4 py-2 rounded-2xl'>learn {item.link} </button>
            // </div>                ))}
            
            //             </div>
            
            //         </div>
        <div>
            <div className="services ">

                <div className='our-services text-center  text-3xl font-bold p-9 subpixel-antialiased ' id='card'>Our Servic<span className=' bg-sky-200'>es</span></div>

                <div className="boxes flex justify-center ">

                    <div className="card bg-[url('/src/web-dev.jpg')] max-w-md mx-auto  md:max-w-2xl md:h-auto hover:text-black bg-no-repeat bg-contain pt-48  border-2  m-5 rounded-full w-auto h-96 text-white" >

                        <div className="card-body border-1 pt-5 pb-2 bg-green-600">
                            <h4 className=' font-semibold text-xl p-2  '>1- Website Devlopement</h4>
                            <p className="card-text text-xm px-2">We create modern, responsive, and user-friendly websites tailored to your business needs, ensuring seamless experiences for your customers across all devices..</p>
                        </div>
                    </div>

                    <div className="card bg-[url('/src/seo.jpg')] max-w-md mx-auto  md:max-w-2xl md:h-auto hover:text-black  bg-no-repeat  bg-contain pt-48  border-2   m-5 rounded-full  w-auto h-96 text-white " >

                        <div className="card-body  border-1 pt-5 pb-2 bg-green-600">
                            <h4 className=' font-semibold text-xl p-2 '>2- SEO <span className='text-xs'>(Search Engine Optimization)</span></h4>
                            <p className="card-text text-xm px-2">Our expert SEO strategies improve your website's  visibility on  search engines, driving organic traffic and helping you rank higher for  relevant keywords..</p>
                        </div>
                        </div>

                    <div className="card bg-[url('/src/marketing.jpg')] max-w-md mx-auto md:max-w-2xl md:h-auto hover:text-black bg-no-repeat bg-contain pt-48  border-2   m-5 rounded-full w-auto h-96 text-white " >

                        <div className="card-body border-1 pt-5 pb-2 bg-green-600">
                            <h4 className=' font-semibold text-xl p-2 '>3- Digital Marketing</h4>
                            <p className="card-text text-xm px-2"> From social media marketing to paid campaigns, we help you connect with your audience through targeted digital strategies that deliver measurable results.</p>
                        </div>
                    </div>

                    <div className="card bg-[url('/src/branding.jpg')] max-w-md mx-auto  md:max-w-2xl md:h-auto hover:text-black  bg-no-repeat bg-contain pt-48  border-2 m-5 rounded-full w-auto h-96 text-white " >

                        <div className="card-body  border-1 pt-5 pb-2 bg-green-600">
                            <h4 className=' font-semibold text-xl p-2 '>4- Branding</h4>
                            <p  className="card-text text-xm px-2  ">We craft distinctive brand identities that resonate with your audience, building trust and loyalty to make your business stand out in the marketplace.</p>
                        </div>
                    </div>


                </div>


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
