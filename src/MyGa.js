import ReactGA from 'react-ga';

const myGa = () => {
    const GA_ID = 'G-CS114HJ4N6'; // your google analytics id
    ReactGA.initialize(GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default myGa;