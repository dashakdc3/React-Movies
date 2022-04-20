import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  renderColumn = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.column);
  };
  createKey = (item, column) => {
    return item._id + (column.column || column.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              //   <td>{item[column.column]}</td>
              <td key={this.createKey(item, column)}>
                {this.renderColumn(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
