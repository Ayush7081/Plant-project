// import React, { useState, useEffect } from "react";

// const Carousel = () => {
//   const slides = [
//     {
//       id: 1,
//       image: "https://via.placeholder.com/1920x1080", // Replace with actual image URLs
//       text: "Transforming Ideas into Digital Success",
//     },
//     {
//       id: 2,
//       image: "https://via.placeholder.com/1920x1080",
//       text: " Elevate Your Online Presence",
//     },
//     {
//       id: 3,
//       image: "https://via.placeholder.com/1920x1080",
//       text: " Your Growth is Our Mission",
//     },
//     {
//       id: 4,
//       image: "https://via.placeholder.com/1920x1080",
//       text: "Slide 3: Stunning Beach",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();  // Move to the next slide automatically
//     }, 5000); // Change slide every 5 seconds

//     // Clean up the interval on component unmount
//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Image Slider */}
//       <div
//         className="flex transition-transform ease-in-out duration-500"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="min-w-full h-screen flex items-center justify-center relative"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="absolute inset-0 bg-black opacity-40"></div>
//             <div className="relative text-white text-center px-6 md:px-12">
//               <h2 className="text-4xl md:text-6xl font-bold">{slide.text}</h2>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Previous Button */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
//       >
//         &#10094;
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
//       >
//         &#10095;
//       </button>

//       {/* Pagination Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-white" : "bg-gray-400"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
