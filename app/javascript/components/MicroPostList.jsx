import React from "react";
import styled from "styled-components";

const StyledMicroPosts = styled.div`
  .microposts {
    list-style: none;
    padding: 0;
    li {
      padding: 10px 0;
      border-top: 1px solid #e8e8e8;
    }
    .user {
      margin-top: 5em;
      padding-top: 0;
    }
    .content {
      display: block;
      margin-left: 60px;
      img {
        display: block;
        padding: 5px 0;
      }
    }
    .timestamp {
      display: block;
      margin-left: 60px;
    }
    .gravatar {
      float: left;
      margin-right: 10px;
      margin-top: 5px;
    }
  }

  aside {
    textarea {
      height: 100px;
      margin-bottom: 5px;
    }
  }

  span.picture {
    margin-top: 10px;
    input {
      border: 0;
    }
  }
`;

const MicroPostList = props => {
  if (props.microposts !== undefined) {
    return (
      <StyledMicroPosts>
        <h3>Microposts ({props.microposts.length})</h3>
        <ol className="microposts">
          {props.microposts.map(micropost => (
            <li key={`micropost-${micropost.id}`}>
              <div dangerouslySetInnerHTML={{ __html: props.gravatar }} />
              {/*<span className="user">*/}
              {/*<a href={`/users/${micropost.user.id}`}>*/}
              {/*{micropost.user.name}*/}
              {/*</a>*/}
              {/*</span>*/}
              <span className="content">{micropost.content}</span>
              <span className="timestamp">Posted {micropost.created_at}</span>
            </li>
          ))}
        </ol>
      </StyledMicroPosts>
    );
  }
  return <div />;
};

export default MicroPostList;
