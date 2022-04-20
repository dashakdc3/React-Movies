import React, { Component } from "react";
import Like from "../../commonComponents/like";

class MoviesTable extends Component {
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
  render() {
    const { movies, onLike, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr style={{ cursor: "pointer" }}>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onClickforLike={() => onLike(movie)}
                />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default MoviesTable;

// const MoviesTable = (props) => {
//   const { movies, onLike, onDelete, onSort } = props;
//   return (
//     <table className="table">
//       <thead>
//         <tr style={{ cursor: "pointer" }}>
//           <th onClick={() => onSort("title")}>Title</th>
//           <th onClick={() => onSort("genre.name")}>Genre</th>
//           <th onClick={() => onSort("numberInStock")}>Stock</th>
//           <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
//           <th />
//           <th />
//         </tr>
//       </thead>
//       <tbody>
//         {movies.map((movie) => (
//           <tr key={movie._id}>
//             <td>{movie.title}</td>
//             <td>{movie.genre.name}</td>
//             <td>{movie.numberInStock}</td>
//             <td>{movie.dailyRentalRate}</td>
//             <td>
//               <Like liked={movie.liked} onClickforLike={() => onLike(movie)} />
//             </td>
//             <td>
//               <button
//                 onClick={() => onDelete(movie)}
//                 className="btn btn-danger btn-sm"
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default MoviesTable;
