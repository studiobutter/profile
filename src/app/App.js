import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";
import { Helmet } from 'react-helmet';
import EmbedImage from '../assets/embed/EmbedImage.png'

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Helmet>
        <meta property="og:title" content="Studio Butter" />
        <meta property="og:description" content="Hello! I'm Butter, an artist, graphic designer and probably coder and a pianist. And this is my Profile!" />
        <meta property="og:image" content={EmbedImage} />
        <meta property="og:url" content="https://studiobutter.github.io/profile" />
        <meta name="twitter:card" content="Studio Butter Website" />
      </Helmet>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
