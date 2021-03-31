import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { TextInput, Button } from "..";
import { useHistory } from "react-router-dom";

const ToDoForm = ({ mode }) => {
  const history = useHistory();
  return (
    <Fragment>
      <TextInput
        label="Title"
        name="title"
        handleChange={() => {}}
        setFieldTouched={() => {}}
        type="text"
        error="This an error"
      />
      <TextInput
        label="Author"
        name="author"
        handleChange={() => {}}
        setFieldTouched={() => {}}
        type="text"
      />
      <Button
        type={`btn-block btn-${mode === "CREATE" ? "primary" : "warning"}`}
        onClick={() => {}}
        label="Submit"
      />
      <Button
        label="Go Back"
        type="btn btn-block btn-secondary"
        onClick={() => history.goBack()}
      />
    </Fragment>
  );
};

ToDoForm.propTypes = {
  mode: PropTypes.oneOf(["CREATE", "EDIT"]),
};

export default ToDoForm;
