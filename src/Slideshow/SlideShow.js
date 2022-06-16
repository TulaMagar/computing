import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
import { slideImages } from "../Data/Slideshow_path.js";

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div className="section">
              <img
                className="test"
                src={slideImage.url}
                loading="lazy"
                alt="slideshow images not found"
              />

              <div className="text-block">
                <h1 className="medium">{slideImage.title}</h1>
                <p className="small">&emsp;{slideImage.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
