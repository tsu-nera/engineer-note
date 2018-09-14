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

const EditUser = props => (
  <div>
    <h1>Update your profile</h1>
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <StyledForm>
          <FormFor url={`/users/${props.id}`} method="patch" name="user">
            <Label htmlFor="name">name</Label>
            <TextField
              name="name"
              className="form-control"
              defaultValue={props.name}
            />
            <Label htmlFor="email">email</Label>
            <EmailField
              name="email"
              className="form-control"
              defaultValue={props.email}
            />
            <Label htmlFor="password">password</Label>
            <PasswordField name="password" className="form-control" />
            <Label htmlFor="password_confirmation">Confirmation</Label>
            <PasswordField
              name="password_confirmation"
              className="form-control"
            />
            <Submit
              name="commit"
              value="Save change"
              className="btn btn-primary"
            />
          </FormFor>
        </StyledForm>
        <div className="gravatar_edit">
          <div dangerouslySetInnerHTML={{ __html: props.gravatar }} />
          <a
            href="http://gravatar.com/emails"
            rel="noopener noreferrer"
            target="_blank"
          >
            change
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default EditUser;
