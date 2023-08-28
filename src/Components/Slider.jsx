import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import first from "../Components/Images/first.jpg";
import second from "../Components/Images/second.jpg";
import third from "../Components/Images/third.jpg";

export default function Slider() {
  const images = [
    {
      id: 1,
      src: first,
      style: "bg-gray-500",
      Tag:"Shop Blazers"
    },
    {
      id: 2,
      src: second,
      style: "bg-blue-300",
      Tag:"Women Sweaters"
    },
    {
      id: 3,
      src: third,
      style: "bg-yellow-600",
      Tag:"T-Shirts"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative mt-16 h-screen w-screen">
      {images.map((image, index,style) => (
        <div
          key={image.id}
          className="slider-image h-full w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${image.src})`,
            display: index === currentIndex ? "block" : "none",
          }}
        >
          <div className={` color absolute h-full w-full opacity-40 flex items-center justify-between ${image.style}`} 
          > 
          <p className="absolute ml-24 z-50 text-white text-6xl">{image.Tag}</p>
            <div className="ml-4">
              <BsChevronCompactLeft className="cursor-pointer  text-white hover:scale-150 " size={30} onClick={goToPreviousImage} />
            </div>
            <div className="mr-4">
              <BsChevronCompactRight className="cursor-pointer  hover:scale-150 text-white" size={30} onClick={goToNextImage} />
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}







