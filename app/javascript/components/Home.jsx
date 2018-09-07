import React from "react";

const Home = props => (
  <html>
    <head>
      <title> {props.title} | Ruby on Rails Tutorial Sample App</title>
    </head>
    <body>
      <h1>Sample App</h1>
      <p>
        This is the home page for the
        <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a>
        sample application.
      </p>
    </body>
  </html>
);

export default Home;
