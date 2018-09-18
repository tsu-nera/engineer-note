import React from "react";
import styled from "styled-components";
import { FormFor, Submit, TextArea } from "react-rails-form-helpers";
import Welcome from "./Welcome";
import MicroPostList from "./MicroPostList";

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

const Home = props => {
  if (props.login) {
    return (
      <div className="row">
        <StyledUser>
          <aside className="col-md-4">
            <section className="user_info">
              <div dangerouslySetInnerHTML={{ __html: props.gravatar }} />
              <h1>{props.name}</h1>
              <span>
                <a href={`/users/${props.user_id}`}>view my profile</a>
              </span>
            </section>
            <section className="micropost_form">
              <FormFor url="/microposts" method="post" name="micropost">
                <div className="field">
                  <TextArea name="content" className="form-control" />
                </div>
                <Submit
                  name="commit"
                  value="Post"
                  className="btn btn-primary form-control"
                />
              </FormFor>
            </section>
          </aside>
        </StyledUser>
        <div className="col-md-8">
          <h3>Micropost Feed</h3>
          <MicroPostList microposts={props.microposts} />
        </div>
      </div>
    );
  } else {
    return <Welcome />;
  }
};

export default Home;
