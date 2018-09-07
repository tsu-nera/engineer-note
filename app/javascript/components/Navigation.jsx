import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const Logo = styled(Link)`
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

const Navigation = () => (
  <header>
    <Navbar fixedTop inverse>
      <div className="container">
        <BrowserRouter>
          <Logo to="#">Engineer Note</Logo>
        </BrowserRouter>
        <Nav pullRight>
          <NavItem>Home</NavItem>
          <NavItem>Help</NavItem>
          <NavItem>About</NavItem>
        </Nav>
      </div>
    </Navbar>
  </header>
);

export default Navigation;
