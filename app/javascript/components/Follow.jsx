import React from "react";
import styled from "styled-components";
import Stats from "./Stats";

const StyledUser = styled.div`
  aside {
    section.user_info {
      margin-top: 20px;
    }
    section {
      padding: 10px 0;
      margin-top: 20px;
      &:first-child {
        border: 0;
        padding-top: 0;
      }
      span {
        display: block;
        margin-bottom: 3px;
        line-height: 1;
      }
      h1 {
        font-size: 1.4em;
        text-align: left;
        letter-spacing: -1px;
        margin-bottom: 3px;
        margin-top: 0px;
      }
    }
  }

  .gravatar {
    float: left;
    margin-right: 10px;
  }

  .gravatar_edit {
    margin-top: 15px;
  }
`;

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

const Follow = props => (
  <StyledUser>
    <div className="row">
      <aside className="col-md-4">
        <section className="user_info">
          <div dangerouslySetInnerHTML={{ __html: props.gravatar }} />
          <h1>{props.name}</h1>
          <span>
            <a href={`/users/${props.user_id}`}>view my profile</a>
          </span>
        </section>
        <section className="stats">
          <Stats stats={props.stats} />
          <div className="user_avatars">
            {props.gravatars.map(gravatar => (
              <div dangerouslySetInnerHTML={{ __html: gravatar }} />
            ))}
          </div>
        </section>
      </aside>
      <div className="col-md-8">
        <h3>{props.title}</h3>
        <ul className="users follow">
          <StyledUsers>
            {zip(props.gravatars, props.links).map(img => {
              return (
                <li>
                  <div dangerouslySetInnerHTML={{ __html: img }} />
                </li>
              );
            })}
          </StyledUsers>
        </ul>
      </div>
    </div>
  </StyledUser>
);

export default Follow;
