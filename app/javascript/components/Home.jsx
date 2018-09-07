import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

const CenterJumbotron = styled(Jumbotron)`
  section {
    overflow: auto;
  }

  textarea {
    resize: vertical;
  }

  text-align: center;

  h1 {
    margin-bottom: 10px;
  }

`;

const Home = () => (
  <CenterJumbotron>
    <h1>Welcome to the Sample App</h1>

    <h2>
      This is the home page for the
      <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a>
      sample application.
    </h2>
    <Link to="/signup" className="btn btn-lg btn-primary">
      Sign up now!
    </Link>
  </CenterJumbotron>
);

export default Home;
