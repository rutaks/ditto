import React, { Fragment } from "react";
import PropTypes from "prop-types";
import TableHeading from "../TableHeading";
import TableRow from "../TableRow";
import Button from "../Button";

const Table = ({ items }) => {
  return (
    <Fragment>
      <table class="table table-hover">
        <TableHeading columns={["ID", "Title", "Author", "Action"]} />
        <tbody>
          {items.map((item, index) => (
            <TableRow key={index} item={item} index={index} />
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <Button label="Load More" type="btn-outline-primary" />
      </div>
    </Fragment>
  );
};

Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
