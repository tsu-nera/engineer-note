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

const Home = () => (
  <CenterJumbotron>
    <h1>Welcome to the Sample App</h1>

    <h2>
      This is the home page for the
      <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a>
      sample application.
    </h2>
    <BrowserRouter>
      <Link to="#" className="btn btn-lg btn-primary">
        Sign up now!
      </Link>
    </BrowserRouter>
  </CenterJumbotron>
);

export default Home;
