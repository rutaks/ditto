import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Formik } from "formik";
import * as Yup from "yup";
import { TodoForm } from "../../components";
import { createToDo } from "../../api/todo.api";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Please provide a title for the todo"),
  author: Yup.string().required("Please provide the author for the todo"),
});

const CreateToDo = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const createToDoHook = useMutation(createToDo, {
    onSuccess: () => {
      queryClient.invalidateQueries("toDos");
      history.goBack();
    },
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
          onSubmit={(data) => {
            createToDoHook.mutate(data);
          }}
        >
          {(formikProps) => (
            <TodoForm
              mode="CREATE"
              formikProps={formikProps}
              isSubmitting={createToDoHook.isLoading}
              error={createToDoHook.error}
              hasError={createToDoHook.isError}
            />
          )}
        </Formik>
      </div>
    </div>
  );
};

CreateToDo.propTypes = {};

export default CreateToDo;
