import React, { useEffect } from "react";
import {
  Navigation,
  Home,
  About,
  QuestionsList,
  Login,
  Careers,
  Contact,
  Tour,
} from "./Import/Import.js";

import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import Footer from "./Footer/Footer.js";

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

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div lazy="loading" className="App background">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/question" element={<QuestionsList />} />
          <Route path="/question/:blogs" element={<Blog />} />
          <Route exact path="/login" element={<Login />} />

          {/* Links for Footer */}
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/tour" element={<Tour />} />

          {/* Redirect to home page if page not found*/}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
