import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Help from "./Help";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";

const StyledRoot = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
  }

  h1 {
    font-size: 3em;
    letter-spacing: -2px;
    margin-bottom: 30px;
    text-align: center;
  }

  h2 {
    font-size: 1.2em;
    letter-spacing: -1px;
    margin-bottom: 30px;
    text-align: center;
    font-weight: normal;
    color: #777;
  }

  p {
    font-size: 1.1em;
    line-height: 1.7em;
  }
`;

const Root = () => (
  <BrowserRouter>
    <StyledRoot>
      <Header />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
        <Footer />
      </div>
    </StyledRoot>
  </BrowserRouter>
);

export default Root;
