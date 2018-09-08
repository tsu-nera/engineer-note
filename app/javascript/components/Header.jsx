import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const Logo = styled.a`
  float: left;
  margin-right: 10px;
  font-size: 1.7em;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -1px;
  padding-top: 9px;
  font-weight: bold;

  :hover {
    color: #fff;
    text-decoration: none;
  }
`;

const Header = () => (
  <header>
    <Navbar fixedTop inverse>
      <div className="container">
        <Logo href="/">Engineer Note</Logo>
        <Nav pullRight>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </Nav>
      </div>
    </Navbar>
  </header>
);

export default Header;
