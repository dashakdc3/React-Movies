// import React from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const MovieForm = (props) => {
//   const { id } = useParams();
//   const history = useNavigate();
//   return (
//     <div>
//       <h1>Movie Form {id} </h1>
//       <button className="btn btn-primary" onClick={() => history("/movies")}>
//         Save
//       </button>
//     </div>
//   );
// };

// export default MovieForm;

import Joi from "joi-browser";
import { getMovie, saveMovie } from "../StarterCode/fakeMovieService";
import { getGenres } from "../StarterCode/fakeGenreService";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const MovieForm = () => {
  const [state, setState] = useState({
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  });

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  useEffect(() => {
    const genres = getGenres();
    setState({ genres });

    const { id } = useParams();
    const history = useNavigate();

    const movieId = id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return history.replace("/not-found");

    setState({ data: this.mapToViewModel(movie) });
  });

  const mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  const doSubmit = () => {
    saveMovie(setState.data);
    const history = useNavigate();
    history.push("/movies");
  };

  return (
    <div>
      <h1>Movie Form</h1>
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genreId", "Genre", this.state.genres)}
        {this.renderInput("numberInStock", "Number in Stock", "number")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderButton("Save")}
      </form>
    </div>
  );
};

export default MovieForm;

// export const withRouter = (Component) => {
//   const Wrapper = (props) => {
//     const history = useNavigate();
//     return <Component history={history} {...props} />;
//   };
//   return Wrapper;
// };
// function MovieForm(props) {
//   const [count, setState] = useState(0);
//   const [name, setName] = useState("");

//   useDocumentTitle(`${name} has clicked ${count} times!`);

//   return (
//     <Fragment>
//       <input type="text" onChange={e => setName(e.target.value)} />
//       <div>
//         {name} has clicked {count} times!
//       </div>
//       <button onClick={() => setState(count + 1)}>Increase</button>
//     </Fragment>
//   );
// }

// export default MovieForm;
