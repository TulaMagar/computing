import React, { useEffect } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation.js";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Shop from "./Questions/RouterWithBootstrap.js";
import Login from "./Auth/Login.js";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import Footer from "./Footer/Footer";
import Bloglist from "./BlogList";

// import test from './Questions/QuestionList'

// Sitemap: https://www.xml-sitemaps.com/
//https://www.npmjs.com/package/react-localstorage
//Login with google : https://www.freakyjolly.com/google-signin-login-button-in-react-js-example-using-react-google_login-package/

const useScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const Blog = () => {
  const { blogs } = useParams();
  console.log({ blogs });

  const [BlogItem, setBlogItem] = React.useState();

  React.useEffect(() => {
    const BlogItem = React.lazy(() => import(`./blogs/${blogs}.js`));
    console.log({ BlogItem });
    setBlogItem(BlogItem);
  }, [blogs]);

  return (
    <>
      <h1>Blog</h1>
      {BlogItem && <BlogItem />}
    </>
  );
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App background">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/blogList" element={<Bloglist />} />
          <Route path="/blogList/:blogs" element={<Blog />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/shop/:blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
