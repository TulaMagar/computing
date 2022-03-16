import React from 'react';
import SlideShow from './SlideShow';
import './Home.css';

const Home = () => {
    return (
        <>
        <SlideShow/>
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

        <p className='context'>
            <span> 
                Find the similar issues and solution. <strong> Not avaiable: Right now, posting a issue isn't avaiable but 
                we will build it soon! </strong>
            </span>
        </p>

        </>
    );

}

export default Home;