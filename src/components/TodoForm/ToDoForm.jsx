import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { TextInput, Button } from "..";
import { useHistory } from "react-router-dom";
import { getError } from "../../utils/formik.util";

const ToDoForm = ({ mode, formikProps }) => {
  const history = useHistory();

  return (
    <Fragment>
      <TextInput
        type="text"
        name="title"
        label="Title"
        error={getError(formikProps, "title")}
        handleChange={formikProps.handleChange("title")}
        setFieldTouched={() => formikProps.setFieldTouched("title")}
      />
      <TextInput
        type="text"
        name="author"
        label="Author"
        error={getError(formikProps, "author")}
        handleChange={formikProps.handleChange("author")}
        setFieldTouched={() => formikProps.setFieldTouched("author")}
      />
      <Button
        label="Submit"
        type={`btn-block btn-${mode === "CREATE" ? "primary" : "warning"}`}
        onClick={() => formikProps.handleSubmit()}
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
  formikProps: PropTypes.object,
};

export default ToDoForm;
