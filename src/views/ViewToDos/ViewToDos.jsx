import React, { Fragment } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { getAllToDos, removeToDo } from "../../api/todo.api";
import { Button, Table } from "../../components";
import { routes } from "../../config/routing.config";

const ViewToDos = () => {
  const history = useHistory();
  const queryClient = useQueryClient();
  const getToDosHook = useQuery("toDos", getAllToDos);
  const removeToDoHook = useMutation(removeToDo, {
    onSuccess: () => {
      queryClient.invalidateQueries("toDos");
    },
  });

  return (
    <Fragment>
      <br />
      <br />
      <h1>To dos ({getToDosHook?.data?.data?.length || 0})</h1>
      <Button
        label="Create todo"
        type="btn btn-block btn-primary"
        onClick={() => history.push(routes.toDo.routes.create.route)}
      />
      <Table
        onModifyItem={(id) => history.push(`/to-dos/${id}/update`)}
        onDeleteItem={(id) => removeToDoHook.mutate({ id })}
        items={getToDosHook?.data?.data}
        isLoading={getToDosHook.isFetching || removeToDoHook.isLoading}
      />
    </Fragment>
  );
};

// ViewToDos.propTypes = {};

export default ViewToDos;
