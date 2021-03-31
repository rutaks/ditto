import React from "react";
// import PropTypes from "prop-types";

const TableRow = ({ item, index }) => {
  return (
    <tr class={index % 2 === 0 && "table-active"}>
      <th scope="row">{index + 1}</th>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>
        <div class="row">
          <button type="button" class="btn btn-warning">
            Edit
          </button>
          <button type="button" class="btn btn-primary">
            View Details
          </button>
          <button type="button" class="btn btn-danger">
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  // columns: PropTypes.arrayOf(PropTypes.string),
};

export default TableRow;
