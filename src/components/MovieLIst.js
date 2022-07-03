import React from "react";
import "./Movie.css";

const MovieLIst = (props) => {
  const FavouriteComponent = props.AddFaourite;
  const addToFavourite = (ele) => {
    props.favouriteMovie((prev) => {
      const test = prev.find((element) => {
        return element.Poster === ele.Poster;
      });
      if (test) {
        return [...prev];
      } else {
        return [...prev, ele];
      }
    });
  };

  return (
    <>
      {props.movie.map((ele, index) => (
        <div className="image-holder">
          <img src={ele.Poster} alt="movie"></img>
          <div className="overlay" onClick={addToFavourite.bind(null, ele)}>
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieLIst;
