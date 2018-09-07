import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Help from "./Help";
import About from "./About";
import Contact from "./Contact";

const Root = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </div>
  </BrowserRouter>
  
);

export default Root;
