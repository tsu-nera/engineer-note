import React from "react";
import styled from "styled-components";
import MicroPostList from "./MicroPostList";
import Stats from "./Stats";
import FollowForm from "./FollowForm";

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

const User = props => (
  <StyledUser>
    <div className="row">
      <aside className="col-md-4">
        <section className="user_info">
          <h1>
            <div dangerouslySetInnerHTML={{ __html: props.gravatar }} />
            {props.name}
          </h1>
        </section>
        <section className="stats">
          <Stats stats={props.stats} />
        </section>
      </aside>
      <aside className="col-md-8">
        <FollowForm
          me={props.me}
          login={props.login}
          user_id={props.user_id}
          follow={props.follow}
          unfollow_id={props.unfollow_id}
        />
        <h3>Microposts ({props.microposts.length})</h3>
        <MicroPostList microposts={props.microposts} />
      </aside>
    </div>
  </StyledUser>
);

export default User;
