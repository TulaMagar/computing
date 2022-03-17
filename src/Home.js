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

                <div className="image">
                        Recently, Microsoft has been updating software as usual. This time Microsoft plan to update the outlook navigation panel
                    display style to vertical panel on the left side. Before this new update, we used to see navigation panel display on the buttom left side of outlook. Now, Microsoft are letting to use some user who has turn
                    on "Comming Soon" feature. People has "Comming Soon" feature are having confusion over this new update. You can turn off the "Comming Soon" and don't use it until new feature are
                    permenently avaiable to everyone or get use it ahead than most people. I would suggest IT professional to use this feature as soon as possible and get familiar with the new navigation panel 
                    display style so, you will assist other people fast and concise way.
                </div>

                <div className="image">
                    having confusion over this new update. You can turn off the "Comming Soon" and don't use it until new feature are
                    permenently avaiable to everyone or get use it ahead than most people. I would suggest IT professional to use this feature as soon as possible and get familiar with the new navigation panel 
                    display style so, you will assist other people fast and concise way.
                </div>
                <div className="image">
                        Recently, Microsoft has been updating software as usual. This time Microsoft plan to update the outlook navigation panel
                    display style to vertical panel on the left side. Before this new update, we used to see navigation panel display on the buttom left side of outlook. Now, Microsoft are letting to use some user who has turn
                    on "Comming Soon" feature. People has "Comming Soon" 
                </div>

                <div className="image">
                        Recently, Microsoft has been updating software as usual. This time Microsoft plan to update the outlook navigation panel
                    display style to vertical panel on the left side. Before this new update, we used to see navigation panel display on the buttom left side of outlook. Now, Microsoft are letting to use some user who has turn
                    on "Comming Soon" feature. People has "Comming Soon" feature are having confusion over this new update. You can turn off the "Comming Soon" and don't use it until new feature are
                    permenently avaiable to everyone or get use it ahead than most people. I would suggest IT professional to use this feature as soon as possible and get familiar with the new navigation panel 
                    display style so, you will assist other people fast and concise way.
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