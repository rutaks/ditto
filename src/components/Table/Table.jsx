import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { CircleSpinner } from "react-spinners-kit";
import TableHeading from "../TableHeading";
import TableRow from "../TableRow";
import Button from "../Button";

const Table = ({ items, isLoading }) => {
  if (isLoading)
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
  isLoading: PropTypes.bool,
};

export default Table;
