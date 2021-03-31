import React from "react";
import ToDoForm from "../../components/TodoForm/ToDoForm";
// import PropTypes from "prop-types";

const CreateToDo = () => {
  return (
    <div>
      <br />
      <br />
      <h1>Create a ToDo</h1>
      <div class="form-group">
        <ToDoForm />
      </div>
    </div>
  );
};

CreateToDo.propTypes = {};

export default CreateToDo;
