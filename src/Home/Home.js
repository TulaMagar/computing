import React from 'react';
import SlideShow from '../Slideshow/SlideShow.js';
import './Home.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Clean from '../Background/clean.avif';
import Moon from '../Background/moon.webp';
import Sea from '../Background/sea.jpg';


const Home = () => {
    
    return (
        <React.Fragment>
            <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
            
                <SlideShow/>

            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
                <div className='container-large'>
                    <div className="flex-container">

                        <div className="flex-child magenta">
                            Flex Column 1
                        </div>
                        
                        <div className="flex-child green">
                            Flex Column 2
                        </div>
                        <div className="flex-child magenta">
                            Flex Column 1
                        </div>
                        
                        <div className="flex-child green">
                            Flex Column 2
                        </div>
            
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
            
                <p className='context'>
                    <span> 
                        Find the similar issues and solution. <strong> Not avaiable: Right now, posting a issue isn't avaiable but 
                        I will build it soon! </strong>
                    </span>
                </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
            
                <div className='container-L-image'>
                        <div className="Static-container">
                            
                            <div className="image">
                                <img src={Clean} alt="Clean not found"/>
                            </div>

                            <div className="image">
                                <img src={Moon} alt="Clean not found"/>
                            </div>
                            <div className="image">
                                <img src={Sea} alt="Clean not found"/>
                            </div>

                            <div className="image">
                                <img src={Clean} alt="Clean not found"/>
                            </div>

                        </div>
                    </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
            
                <p className='context'>
                    <span> 
                        Find the similar issues and solution. <strong> Not avaiable: Right now, posting a issue isn't avaiable but 
                        I will build it soon! </strong>
                    </span>
                </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
            
                <p className='context'>
                    <span> 
                        Find the similar issues and solution. <strong> Not avaiable: Right now, posting a issue isn't avaiable but 
                        I will build it soon! </strong>
                    </span>
                </p>
            </ScrollAnimation>
        </React.Fragment>
    );

}

export default Home;