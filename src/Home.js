import React from 'react';
import SlideShow from './SlideShow';
import './Home.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
    
    return (
        <>
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
        
            <div className="Static-container">

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
        </>
    );

}

export default Home;