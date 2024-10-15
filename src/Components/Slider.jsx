 import React from 'react';
 import SimpleImageSlider from "react-simple-image-slider";
 function Slider() {
     const images = [
       { url: "/green-architecture.jpg" },
         { url: "/green-architecture2.jpeg" },
    { url: "/footer-img.jpg" },  
       ];

return (
   <div >
      <SimpleImageSlider
      width="100%"
         height= "100%"
      images={images}
        showBullets={true}
   showNavs={true}
        autoPlay={true}
        autoPlayDelay={3.9}
        responsive={true}
      />
    </div>  
  )
}

export default Slider