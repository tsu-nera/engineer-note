import React from "react";
import {Jumbotron} from "react-bootstrap";
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

const Welcome = () => (
  <CenterJumbotron>
    <h1>Welcome to the Sample App</h1>
    <h2>
      This is the home page for the
      <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a>
      sample application.
    </h2>
    <a href="/signup" className="btn btn-lg btn-primary">
      Sign up now!
    </a>
  </CenterJumbotron>
);

export default Welcome;
