import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { CircleSpinner } from "react-spinners-kit";
import { useHistory, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import ToDoForm from "../../components/TodoForm/ToDoForm";
import { getToDo, modifyToDo } from "../../api/todo.api";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Please provide a title for the todo"),
  author: Yup.string().required("Please provide the author for the todo"),
});

const UpdateToDo = () => {
  const { id } = useParams();
  const history = useHistory();
  const queryClient = useQueryClient();
  const getToDoHook = useQuery(["toDos", { id }], getToDo);
  const modifyToDoHook = useMutation(modifyToDo, {
    onSuccess: () => {
      queryClient.invalidateQueries("toDos");
      history.goBack();
    },
  });

  if (getToDoHook.isFetching)
    return (
      <div
        style={{
          margin: "auto",
          width: "50%",
          paddingTop: "10%",
          textAlign: "center",
        }}
        className="d-flex justify-content-center"
      >
        <CircleSpinner color="#858585" />
      </div>
    );

  return (
    <div>
      <br />
      <br />
      <h1>Modify '{getToDoHook.data.data.title}'</h1>
      <div class="form-group">
        <Formik
          initialValues={getToDoHook.data.data}
          validationSchema={validationSchema}
          onSubmit={(data) => {
            modifyToDoHook.mutate({ id, data });
          }}
        >
          {(formikProps) => (
            <ToDoForm
              mode="EDIT"
              formikProps={formikProps}
              isSubmitting={modifyToDoHook.isLoading}
              error={modifyToDoHook.error}
              hasError={modifyToDoHook.isError}
            />
          )}
        </Formik>
      </div>
    </div>
  );
};

UpdateToDo.propTypes = {};

export default UpdateToDo;
