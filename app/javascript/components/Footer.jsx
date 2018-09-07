import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 45px;
  padding-top: 5px;
  border-top: 1px solid #eaeaea;
  color: #777;

  a {
    color: #555;
  }

  a:hover {
    color: #222;
  }

  small {
    float: left;
  }

  ul {
    float: right;
    list-style: none;
  }

  ul li {
    float: left;
    margin-left: 15px;
  }
`;

const Footer = () => (
  <StyledFooter className="footer">
    <small>
      The <a href="https://railstutorial.jp/">Ruby on Rails Tutorial</a>
      by <a href="http://www.michaelhartl.com/">Michael Hartl</a>
    </small>
    <nav>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>
          <a href="http://news.railstutorial.org/">News</a>
        </li>
      </ul>
    </nav>
  </StyledFooter>
);

export default Footer;
