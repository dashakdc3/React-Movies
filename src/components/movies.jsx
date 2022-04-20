import React, { Component } from "react";
import { getMovies } from "../StarterCode/fakeMovieService";
import { getGenres } from "../StarterCode/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "../commonComponents/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../commonComponents/listGroup";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./searchBox";

class Movies extends Component {
  state = {
    // movies: getMovies(),
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    searchQuery: "",
    sortColumn: { column: "title", order: "asc" },
  };

  getData = () => {
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;

    let filteredMovies = allMovies;
    if (searchQuery)
      filteredMovies = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filteredMovies = allMovies.filter(
        (m) => m.genre._id === selectedGenre._id
      );

    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filteredMovies.length, data: movies };
  };

  //   const filteredMovies =
  //     selectedGenre && selectedGenre._id
  //       ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
  //       : allMovies;

  //   const sorted = _.orderBy(
  //     filteredMovies,
  //     [sortColumn.column],
  //     [sortColumn.order]
  //   );
  //   const movies = paginate(sorted, currentPage, pageSize);
  //   return { totalCount: filteredMovies.length, data: movies };
  // };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleGenreSelected = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleSearch = (query) => {
    console.log("handleSearch", query);
    // what we write on search box
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
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

  handleSort = (sortColumn) => {
    // const sortColumn = { ...this.state.sortColumn };
    // if (sortColumn.column === column)
    //   sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc;";
    // else {
    //   sortColumn.column = column;
    //   sortColumn.order = "asc";
    // }
    this.setState({ sortColumn: sortColumn });
  };
  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, sortColumn, searchQuery } = this.state;
    if (count === 0) return <p>There are no movies</p>;
    const { totalCount, data: movies } = this.getData();
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
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          {/* <p>Showing {count} movies in the database</p> */}
          <p>Showing {totalCount} movies in the database</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={this.state.sortColumn}
          />
          <Pagination
            onPageChange={this.handlePageChange}
            itemsCount={totalCount}
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
