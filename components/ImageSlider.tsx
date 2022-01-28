import React from 'react';
import ImageContainer from './ImageContainer';
import images from '../data/images';
export default function ImageSlider() {
  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div>
          <div className="slider-brand">
            {images.map((image, i) => (
              <ImageContainer src={image.path} key={i} alt={image.alt} />
            ))}
          </div>
        </div>
        <div>
          <div className="slider-brand">
            {images.map((image, i) => (
              <ImageContainer src={image.path} key={i} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
