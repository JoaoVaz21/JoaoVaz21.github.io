// src/Carousel.js
import React, { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import './Carousel.css';

const Carousel = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? media.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === media.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const renderMedia = (item) => {
    if (item.type === 'image') {
      return <img src={item.src} alt="carousel" className="carousel-media" />;
    } else if (item.type === 'video') {
      return (
        <video controls className="carousel-media">
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };


  return (
    <div className="carousel">
      <img src={arrowLeft}  onClick={handlePrevious} className="carousel-button prev"/>
      {renderMedia(media[currentIndex])}
      <img src={arrowRight} onClick={handleNext} className="carousel-button next"/>
    </div>
  );
};

export default Carousel;