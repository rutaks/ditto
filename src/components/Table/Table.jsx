import React from "react";
import PropTypes from "prop-types";
import TableHeading from "../TableHeading";
import TableRow from "../TableRow";

const Table = ({ items }) => {
  return (
    <table class="table table-hover">
      <TableHeading columns={["ID", "Title", "Author", "Action"]} />
      <tbody>
        {items.map((item, index) => (
          <TableRow key={index} item={item} index={index} />
        ))}
      </tbody>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-primary">
          Load More
        </button>
      </div>
    </table>
  );
};

Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
