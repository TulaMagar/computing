import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
import { slideImages } from "../Data/Slideshow_path.js";

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
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
      </Slide>
    </div>
  );
};

export default Slideshow;
