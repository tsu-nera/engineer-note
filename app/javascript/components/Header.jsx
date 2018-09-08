import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
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
        <Nav activeKey={1} pullRight>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/help">Help</NavItem>
          <NavItem href="/about">About</NavItem>
        </Nav>
      </div>
    </Navbar>
  </header>
);

export default Header;
