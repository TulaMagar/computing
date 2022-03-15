import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import PastPresentFuture from './SlideshowImage/pastPresentFuture.jpg';
import OlOl from './SlideshowImage/olol.jpg';
import Meeting from './SlideshowImage/meeting.jpg';
import Cute from './SlideshowImage/cute.jpg';
import './Slideshow.css'
import LazyLoad from 'react-lazyload';
import LazyLoadImage from 'react-lazy-load-image-component';

const slideImages = [
  {
    url: PastPresentFuture,
    title: 'Evolving',
    caption: 'Computing updates'
  },
  {
    url: OlOl,
    caption: '🤔'
  },
  {
    url: Meeting,
    caption: '👏'
  },
  {
    url: Cute,
    caption: '😀'

  },
];

const Slideshow = () => {
    return (
      
      <div className="slide-container margin">

        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div >
                <LazyLoad>
                  <img className="img-fluid width: 100% height: auto center-block  test" src={slideImage.url}/>
                  <div className='text-block'>
                    <h1 className='medium'>{slideImage.title}</h1>
                    <p className='small'>&emsp;{slideImage.caption}</p>
                  </div>
                </LazyLoad>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;