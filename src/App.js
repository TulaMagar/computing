import React, { useEffect } from "react";
import "./App.css";
import "./SytleEngine.css";
import Navigation from "./Navigation/Navigation.js";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Shop from "./Questions/RouterWithBootstrap.js";
import Login from "./Auth/Login.js";
import Careers from "./Careers/Careers.js";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import Footer from "./Footer/Footer";

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
    const BlogItem = React.lazy(() =>
      import(`./Questions/QuestionList/${blogs}.js`)
    );
    console.log({ BlogItem });
    setBlogItem(BlogItem);
  }, [blogs]);

  return (
    <>
      {/* <h1>Blog</h1> */}
      <React.Suspense fallback={<div>Loading...</div>}>
        {BlogItem && <BlogItem />}
      </React.Suspense>
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
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/question" element={<Shop />} />
          <Route path="/question/:blogs" element={<Blog />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <div className="Logo">
          <a href="https://iconscout.com/icons/tmall" rel="noopener">
            Tmall Logo Icon
          </a>{" "}
          on <a href="https://iconscout.com">Iconscout</a>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
