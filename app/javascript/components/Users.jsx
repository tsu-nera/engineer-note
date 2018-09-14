import React from "react";
import styled from "styled-components";

const StyledUsers = styled.ul`
  list-style: none;
  margin: 0;
  li {
    overflow: auto;
    padding: 10px 0;
    border-bottom: 1px solid;
  }
`;

const zip = (array1, array2) => array1.map((_, i) => [array1[i], array2[i]]);

const Users = props => (
  <div>
    <h1>All users</h1>
    <StyledUsers>
      <li>
        {zip(props.users_gravatar, props.users_link).map((img, link) => {
          return (
            <div>
              <div dangerouslySetInnerHTML={{ __html: img }} />
              <div dangerouslySetInnerHTML={{ __html: link }} />
            </div>
          );
        })}
      </li>
    </StyledUsers>
  </div>
);

export default Users;
