import React from "react";
import {
  FormFor,
  Label,
  EmailField,
  PasswordField,
  Submit
} from "react-rails-form-helpers";
import styled from "styled-components";

const StyledForm = styled.div`
  input,
  textarea,
  select,
  .uneditable-input {
    border: 1px solid #bbb;
    width: 100%;
    margin-bottom: 15px;
    @include box_sizing;
  }

  input {
    height: auto !important;
  }
`;

const Login = () => (
  <div>
    <h1>Log in</h1>
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <StyledForm>
          <FormFor url="/login" method="post" name="session">
            <Label htmlFor="session_email">email</Label>
            <EmailField name="email" className="form-control" />
            <Label htmlFor="session_password">password</Label>
            <PasswordField name="password" className="form-control" />
            <Submit name="commit" value="Log in" className="btn btn-primary" />
          </FormFor>
          <p>
            New user? <a href="/signup">Sign up now!</a>
          </p>
        </StyledForm>
      </div>
    </div>
  </div>
);

export default Login;
