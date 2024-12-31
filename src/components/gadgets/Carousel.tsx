

"use client";
import React, { useState } from "react";
import Image from "next/image"

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Image Slider */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full ">
              {/* <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-[500px] object-cover"  // Adjusted height to make the image portrait
              /> */}
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={900}  // Adjust the width as needed
                height={100} // Adjust the height as needed
                // className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
      >
        &#8594;
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
