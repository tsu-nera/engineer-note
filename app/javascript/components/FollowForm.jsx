import React from "react";
import { FormFor, Submit } from "react-rails-form-helpers";
import styled from "styled-components";

const StyledFormFor = styled(FormFor)`
  padding: 0;

  .btn {
    width: 100%;
  }
`;

const FollowForm = props => {
  if (!props.login) {
    return <div />;
  }

  return (
    <StyledFormFor url="/relationships" method="post" name="follow">
      <input
        id="followed_id"
        name="followed_id"
        type="hidden"
        value={props.user_id}
      />
      <Submit name="follow" value="Follow" className="btn btn-primary" />
    </StyledFormFor>
  );
};

export default FollowForm;
