import Joi from "joi-browser";
import { getMovie, saveMovie } from "../StarterCode/fakeMovieService";
import { getGenres } from "../StarterCode/fakeGenreService";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import formToolTip from "./../commonComponents/form";

function MovieForm(props) {
  // const [errors, setErrors] = useState({});
  const schema = {
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

  const [state, setState] = useState({
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
    schema: schema,
  });

  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const genres = getGenres();
    setState({ genres });

    const movieId = id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return history.replace("/not-found");

    setState({ data: mapToViewModel(movie) });
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
    history.push("/movies");
  };

  return (
    <div>
      <h1>Movie Form</h1>
      <form onSubmit={props.handleSubmit()}>
        {props.renderInput("title", "Title")}
        {props.renderSelect("genreId", "Genre", props.state.genres)}
        {props.renderInput("numberInStock", "Number in Stock", "number")}
        {props.renderInput("dailyRentalRate", "Rate")}
        {props.renderButton("Save")}
      </form>
    </div>
  );
}

export default formToolTip(MovieForm);
