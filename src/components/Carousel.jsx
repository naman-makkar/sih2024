import React, { useState, useEffect } from "react";

const images = [
  "/img1.jpg",
  "/img10.jpg",
  "/img4.jpg",
  "/img9.jpg",
  "/img12.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const handleNextClick = () => {
    goToNextSlide();
  };

  // useEffect hook to set up the automatic sliding
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 2000); // Slide every 2 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Previous Button */}
      <button
        onClick={handlePrevClick}
        className="absolute left-0 p-2 m-2 text-white bg-gray-800 rounded-full"
      >
        ❮
      </button>

      {/* Image Display */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-80 object-cover"
        // className="w-[50%] h-[20%] max-h-20 object-cover"
      />

      {/* Next Button */}
      <button
        onClick={handleNextClick}
        className="absolute right-0 p-2 m-2 text-white bg-gray-800 rounded-full"
      >
        ❯
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-0 flex justify-center w-full space-x-2 mb-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
