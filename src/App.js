import React, { useEffect } from "react";
import "./App.css";
import "./SytleEngine.css";
import Navigation from "./Navigation/Navigation.js";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import QuestionsList from "./Questions/Questions_List.js";
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
      return <p className="loading">Loading has failed. Try refreshing the browser!</p>;
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
        <React.Suspense fallback={<div className="wait"></div>}>
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
