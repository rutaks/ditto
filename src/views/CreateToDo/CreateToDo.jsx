import React from "react";
// import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import ToDoForm from "../../components/TodoForm/ToDoForm";

const CreateToDo = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please provide a title for the todo"),
    author: Yup.string().required("Please provide the author for the todo"),
  });

  return (
    <div>
      <br />
      <br />
      <h1>Create a ToDo</h1>
      <div class="form-group">
        <Formik
          initialValues={{ title: "", author: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formikProps) => (
            <ToDoForm mode="CREATE" formikProps={formikProps} />
          )}
        </Formik>
      </div>
    </div>
  );
};

CreateToDo.propTypes = {};

export default CreateToDo;
