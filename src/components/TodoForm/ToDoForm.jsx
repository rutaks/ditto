import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { TextInput, Button } from "..";
import { useHistory } from "react-router-dom";
import { getError } from "../../utils/formik.util";

const ToDoForm = ({ mode, formikProps, isSubmitting, error, hasError }) => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <Fragment>
      {hasError && (
        <div class="alert alert-dismissible alert-danger">
          <strong>Oh snap!</strong>
          {` ${t("somethingHappened")} ${error?.message}`}
        </div>
      )}
      <TextInput
        type="text"
        name="title"
        label={t("title")}
        defaultValue={formikProps.values.title}
        error={getError(formikProps, "title")}
        handleChange={formikProps.handleChange("title")}
        setFieldTouched={() => formikProps.setFieldTouched("title")}
      />
      <TextInput
        type="text"
        name="author"
        label={t("author")}
        defaultValue={formikProps.values.author}
        error={getError(formikProps, "author")}
        handleChange={formikProps.handleChange("author")}
        setFieldTouched={() => formikProps.setFieldTouched("author")}
      />
      <Button
        isLoading={isSubmitting}
        label={t("submit")}
        type={`btn-block btn-${mode === "CREATE" ? "primary" : "warning"}`}
        onClick={() => formikProps.handleSubmit()}
      />
      <Button
        isDisabled={isSubmitting}
        label={t("goBack")}
        type="btn btn-block btn-secondary"
        onClick={() => history.goBack()}
      />
    </Fragment>
  );
};

ToDoForm.propTypes = {
  mode: PropTypes.oneOf(["CREATE", "EDIT"]),
  formikProps: PropTypes.object,
  isSubmitting: PropTypes.bool,
  error: PropTypes.string,
  hasError: PropTypes.bool,
};

export default ToDoForm;
