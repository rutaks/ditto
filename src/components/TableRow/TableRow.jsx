import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const TableRow = ({ item, index, onDelete, onModify }) => {
  const { t } = useTranslation();

  return (
    <tr class={index % 2 === 0 && "table-active"}>
      <th scope="row">{index + 1}</th>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>
        <div class="row">
          <button
            onClick={() => onModify(item.id)}
            type="button"
            class="btn btn-warning"
          >
            {t("edit")}
          </button>
          <button
            onClick={() => onDelete(item.id)}
            type="button"
            class="btn btn-danger"
          >
            {t("remove")}
          </button>
        </div>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  onDelete: PropTypes.func,
  onModify: PropTypes.func,
};

export default TableRow;
