import React, { Fragment } from "react";
import { Table } from "../../components";
// import PropTypes from "prop-types";

const toDos = [
  {
    title: "The pursuit of happiness",
    author: "Ralph Lauren",
  },
  {
    title: "The alchemist",
    author: "Paolo Coelho",
  },
];

const ViewToDos = () => {
  return (
    <Fragment>
      <br />
      <br />
      <h1>To dos ({toDos.length})</h1>
      <Table items={toDos} />
    </Fragment>
  );
};

// ViewToDos.propTypes = {};

export default ViewToDos;
