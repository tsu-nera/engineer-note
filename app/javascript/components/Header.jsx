import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
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

const Header = () => (
  <header>
    <Navbar fixedTop inverse>
      <div className="container">
        <Logo to="/">Engineer Note</Logo>
        <Nav pullRight>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/help">Help</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  </header>
);

export default Header;
