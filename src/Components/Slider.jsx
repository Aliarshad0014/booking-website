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
      Tag: "Shop Blazers"
    },
    {
      id: 2,
      src: second,
      style: "bg-blue-300",
      Tag: "Women Sweaters"
    },
    {
      id: 3,
      src: third,
      style: "bg-yellow-600",
      Tag: "T-Shirts"
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
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-xs flex mr-20 text-gray-400">Can't find what you're looking for?</p>
        <p className="text-4xl text-gray-800">
          Explore More

          <button className="text-sm ml-3 p-2 rounded-full bordr-2 border-purple-200 transition duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:border-none hover:text-white">
            <BsChevronCompactRight size={30} />
          </button>
        </p>
      </div>

      {images.map((image, index,) => (
        <div
          key={image.id}
          className="slider-image h-full w-full bg-cover bg-center relative z-50 cursor-pointer"
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







