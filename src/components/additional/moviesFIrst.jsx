import React, { Component } from "react";
import { getMovies } from "../StarterCode/fakeMovieService";
import { getGenres } from "../StarterCode/fakeGenreService";
import Like from "../commonComponents/like";
import Pagination from "../commonComponents/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../commonComponents/listGroup";

class Movies extends Component {
  state = {
    // movies: getMovies(),
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: null,
  };
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleGenreSelected = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      selectedGenre,
    } = this.state;
    if (count === 0) return <p>There are no movies</p>;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filteredMovies, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={this.state.genres}
            onGenreSelected={this.handleGenreSelected}
            selectedGenre={this.state.selectedGenre}
            // idProperty="_id"
            // valueProperty="name"
          />
        </div>
        <div className="col">
          {/* <p>Showing {count} movies in the database</p> */}
          <p>Showing {filteredMovies.length} movies in the database</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
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
                      onClickforLike={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            onPageChange={this.handlePageChange}
            itemsCount={filteredMovies.length}
            // itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            // currentPage={this.state.currentPage}
            // count =  {this.state.movies.length}
          />
        </div>
      </div>
    );
  }
}
export default Movies;
