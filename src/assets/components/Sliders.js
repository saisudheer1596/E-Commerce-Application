import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/C1.jpeg';
import img2 from '../images/C2.jpeg';
import img3 from '../images/C3.jpeg';

function Sliders() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images =[
    img1 , img2 , img3
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);


  

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <Carousel>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>       
    </Carousel>
    
  )
}

export default Sliders