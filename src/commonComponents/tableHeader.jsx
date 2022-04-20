import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown as sortAsc,
  faSortUp as sortDesc,
} from "@fortawesome/free-solid-svg-icons";

class TableHeader extends Component {
  raiseSort = (column) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.column === column)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc;";
    else {
      sortColumn.column = column;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    console.log("COLUMN", column.column);
    console.log("SORT", sortColumn);
    if (column.column !== sortColumn.column) return null;
    if (sortColumn.order === "asc") return <FontAwesomeIcon icon={sortDesc} />;
    return <FontAwesomeIcon icon={sortAsc} />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              style={{ cursor: "pointer" }}
              key={column.column || column.key}
              onClick={() => this.raiseSort(column.column)}
            >
              {column.lable} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
