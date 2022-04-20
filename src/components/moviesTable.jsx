import { omit } from "lodash";
import React, { Component } from "react";
import Like from "../commonComponents/like";
import Table from "../commonComponents/table";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  columns = [
    {
      column: "title",
      lable: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { column: "genre.name", lable: "Genre" },
    { column: "numberInStock", lable: "Stock" },
    { column: "dailyRentalRate", lable: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClickforLike={() => this.props.onLike(movie)}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}
export default MoviesTable;
