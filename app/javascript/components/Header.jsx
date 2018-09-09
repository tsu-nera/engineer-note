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

const LoginHeader = props => {
  if (props.login) {
    return (
      <Nav>
        <NavItem href="#">Users</NavItem>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            Account <b className="caret" />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li className="divider" />
            <li>
              <a>Log out</a>
            </li>
          </ul>
        </li>
      </Nav>
    );
  } else {
    return (
      <li>
        <a href="/login">Log in</a>
      </li>
    );
  }
};

const Header = props => (
  <header>
    <Navbar fixedTop inverse>
      <div className="container">
        <Logo href="/">Engineer Note</Logo>
        <Nav activeKey={1} pullRight>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/help">Help</NavItem>
          <LoginHeader login={props.login} />
        </Nav>
      </div>
    </Navbar>
  </header>
);

export default Header;
