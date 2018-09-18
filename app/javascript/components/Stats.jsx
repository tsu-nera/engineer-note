import React from "react";
import styled from "styled-components";

const StyledStats = styled.div`
  overflow: auto;
  margin-top: 0;
  padding: 0;
  a {
    float: left;
    padding: 0 10px;
    border-left: 1px solid gray;
    color: gray;
    &:first-child {
      padding-left: 0;
      border: 0;
    }
    &:hover {
      text-decoration: none;
      color: blue;
    }
  }
  strong {
    display: block;
  }
`;

const Stats = props => (
  <StyledStats>
    <a href={props.stats.following_user_path}>
      <strong id="following" className="stat">
        {props.stats.following_count}
      </strong>
      following
    </a>
    <a href={props.stats.followers_user_path}>
      <strong id="followers" className="stat">
        {props.stats.followers_count}
      </strong>
      followers
    </a>
  </StyledStats>
);

export default Stats;
