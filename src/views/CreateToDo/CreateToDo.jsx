import React from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "react-query";
import { Formik } from "formik";
import * as Yup from "yup";
import { TodoForm } from "../../components";
import { createToDo } from "../../api/todo.api";
import { useHistory } from "react-router-dom";

const CreateToDo = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(t("titleRequired")),
    author: Yup.string().required(t("authorRequired")),
  });
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
      <h1>{t("createTodo")}</h1>
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
