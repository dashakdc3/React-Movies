import React, { Component } from "react";

const ListGroup = (props) => {
  const { genres, idProperty, valueProperty, onGenreSelected, selectedGenre } =
    props;
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[idProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => onGenreSelected(genre)}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[valueProperty]}
        </li>
      ))}
    </ul>
    //   <ul className="list-group">
    //     {genres.map((genre) => (
    //       <li key={genre._id} className="list-group-item">
    //         {genre.name}
    //       </li>
    //     ))}
    //   </ul>
  );
};
ListGroup.defaultProps = {
  idProperty: "_id",
  valueProperty: "name",
};

export default ListGroup;
