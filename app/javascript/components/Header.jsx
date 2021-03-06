import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
} from "react-bootstrap";
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
        <NavItem href="/users">Users</NavItem>
        <NavItem href={`/users/${props.user_id.charCodeAt(0)}`}>
          Profile
        </NavItem>
        <NavItem href={`/users/${props.user_id.charCodeAt(0)}/edit`}>
          Settings
        </NavItem>
        <NavItem data-method="delete" href="/logout" rel="nofollow">
          Log out
        </NavItem>
      </Nav>
    );
  }

  return (
    <li>
      <a href="/login">Log in</a>
    </li>
  );
};

const Header = props => (
  <header>
    <Navbar fixedTop inverse>
      <div className="container">
        <Logo href="/">Rails Tutorials</Logo>
        <Nav activeKey={1} pullRight>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/help">Help</NavItem>
          <LoginHeader login={props.login} user_id={props.user_id} />
        </Nav>
      </div>
    </Navbar>
  </header>
);

export default Header;
