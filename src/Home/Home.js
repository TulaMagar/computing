import React from 'react';
import SlideShow from '../Slideshow/SlideShow.js';
import './Home.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Clean from '../Background/clean.avif';
import Moon from '../Background/moon.webp';
import Sea from '../Background/sea.jpg';
import {Helmet} from "react-helmet";
import Globe from './Globe/giphy.gif';
import styled, { css } from 'styled-components'

//Module build failed (from ./node_modules/source-map-loader/dist/cjs.js):

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}


const Home = () => {

    // const FadeIn = styled.div `
    //     opacity: ${( showPopup ) => (showPopup ? '1' : '0')};
        
    // `;
    
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>computing</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
            
                <SlideShow/>

            </ScrollAnimation>

            <FadeInSection>
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
            </FadeInSection>

            <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
            
                <p className='context'>
                    <span> 
                        Find the similar issues and solution. <strong> Not avaiable: Right now, posting a issue isn't avaiable but 
                        I will build it soon! </strong>
                    </span>
                </p>
            </ScrollAnimation>

            <FadeInSection>
            
                <div className='container-L-image'>
                        <div className="Static-container">
                            
                            <div className="image">
                                <img src={Clean} alt="Clean not found"/>
                                <p>
                                    <span> </span>
                                </p>
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
            </FadeInSection>

            <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'>
                    
                    <div className='container-ReachOut'>
                        <div className="ReachOut-container">
                            
                            <div className="side">
                                <p>
                                    <span> 
                                        Find the similar issues and solution. <strong> Not avaiable: Right now, posting a issue isn't avaiable but 
                                        I will build it soon! </strong>
                                    </span>
                                </p>
                            </div>

                            <div className="side">
                                <img src={Globe} alt="globe not found"/>
                            </div>

                        </div>
                    </div>

            </ScrollAnimation>
        </React.Fragment>
    );

}

export default Home;