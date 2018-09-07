import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Home = () => (
  <div className="center jumbotron">
    <h1>Welcome to the Sample App</h1>

    <h2>
      This is the home page for the
      <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a>
      sample application.
    </h2>
    <BrowserRouter>
      <Link to="#" className="btn btn-lg btn-primary">Sign up now!</Link>
    </BrowserRouter>
  </div>
);

export default Home;
