import React from "react";
import {
  FormFor,
  Label,
  TextField,
  EmailField,
  PasswordField,
  Submit
} from "react-rails-form-helpers";
import styled from "styled-components";

import ErrorMessages from "./ErrorMessages";

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

const Signup = () => (
  <div>
    <h1>Sign up</h1>
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <StyledForm>
          <ErrorMessages />
          <FormFor url="/users" method="post" name="user">
            <Label htmlFor="name">name</Label>
            <TextField name="name" className="form-control" />
            <Label htmlFor="email">email</Label>
            <EmailField name="email" className="form-control" />
            <Label htmlFor="password">password</Label>
            <PasswordField name="password" className="form-control" />
            <Label htmlFor="password_confirmation">Confirmation</Label>
            <PasswordField
              name="password_confirmation"
              className="form-control"
            />
            <Submit
              name="commit"
              value="Create my account"
              className="btn btn-primary"
            />
          </FormFor>
        </StyledForm>
      </div>
    </div>
  </div>
);

export default Signup;
