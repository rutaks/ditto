import React from "react";
import PropTypes from "prop-types";

const TableHeading = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th scope="col">{column}</th>
        ))}
      </tr>
    </thead>
  );
};

TableHeading.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
};

export default TableHeading;
