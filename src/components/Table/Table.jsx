import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { CircleSpinner } from "react-spinners-kit";
import TableHeading from "../TableHeading";
import TableRow from "../TableRow";
// import Button from "../Button";

const Table = ({ items, isLoading, onDeleteItem, onModifyItem }) => {
  const { t } = useTranslation();

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
        <TableHeading columns={["ID", t("title"), t("author"), t("action")]} />
        <tbody>
          {items.map((item, index) => (
            <TableRow
              key={index}
              item={item}
              index={index}
              onDelete={(id) => onDeleteItem(id)}
              onModify={(id) => onModifyItem(id)}
            />
          ))}
        </tbody>
      </table>
      {/* <div className="d-flex justify-content-center">
        <Button label="Load More" type="btn-outline-primary" />
      </div> */}
    </Fragment>
  );
};

Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  onDeleteItem: PropTypes.func,
  onModifyItem: PropTypes.func,
};

export default Table;
