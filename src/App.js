import React, { useState, useEffect } from "react";
import {
  Navigation,
  Navigation_testing,
  Home,
  About,
  QuestionsList,
  Books,
  Login,
  Careers,
  Contact,
  Tour,
  Survey,
  // LogoutButton,
} from "./Import/Import.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import Footer from "./Footer/Footer.js";

import html_routes from "./Seperate_route/html_r/html_routes.js";
import CSS_routes from "./Seperate_route/css_r/css_routes.js";
import JavaScript_routes from "./Seperate_route/javascript_r/javascript_routes.js";
import Python_routes from "./Seperate_route/python_r/python_routes.js";
import reactjs_routes from "./Seperate_route/Reactjs_r/Reactjs_routes.js";

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

class ErrorHandler extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="loading">
          Loading has failed. Try refreshing the browser!
        </p>
      );
    }

    return this.props.children;
  }
}
const Blog = (test) => {
  const { blogs } = useParams();

  const [BlogItem, setBlogItem] = React.useState();

  React.useEffect(() => {
    const BlogItem = React.lazy(() =>
      import(`./Questions/QuestionList/${blogs}.js`)
    );
    setBlogItem(BlogItem);
  }, [blogs]);

  return (
    <>
      <ErrorHandler>
        <React.Suspense fallback={<div className="loading"></div>}>
          {BlogItem && <BlogItem />}
        </React.Suspense>
      </ErrorHandler>
    </>
  );
};

const Paths = () => {
  const Pathname = useLocation();
  const [Path] = useState([
    "/",
    "/about",
    "/careers",
    "/book",
    "/login",
    "/contact",
    "/tour",
    "/survey",
  ]);
  return (
    <>
      {Path.includes(Pathname.pathname) ? (
        <Navigation_testing />
      ) : (
        <Navigation />
      )}
    </>
  );
};
function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  return (
    <HashRouter>
      <ScrollToTop />
      <div lazy="loading" style={{
          backgroundColor: isActive ? 'black' : '',
          color: isActive ? 'whitesmoke' : '',
        }}
        onClick={handleClick}>
        <Paths />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/question" element={<QuestionsList />} />
          <Route exact path="/book" element={<Books />} />
          <Route path="/question/:blogs" element={<Blog />} />
          <Route exact path="/login" element={<Login />} />

          {/* Links for Footer */}
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/tour" element={<Tour />} />
          <Route exact path="/survey" element={<Survey />} />

          {/* programing_languages/html_l/allfiles.js: */}
          {html_routes}
          {CSS_routes}
          {JavaScript_routes}
          {Python_routes}
          {reactjs_routes}

          {/* Redirect to home page if page not found*/}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
