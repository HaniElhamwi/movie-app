import { useState, useEffect } from "react";
import "./App.css";
import MovieLIst from "./components/MovieLIst";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
// import "bootstrap/dist/css/bootstrap.min.css";
import AddFavourite from "./components/AddFavourite";

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("avenger");
  const [favourite, setFavourite] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=1f351c28`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson === undefined) {
      return;
    }
    setMovie(responseJson.Search);
  };
  useEffect(() => {
    getMovieRequest();
  }, [search]);

  if (movie === undefined) {
    setMovie([]);
  }

  console.log(favourite);
  return (
    <div className="container-fluid movie-app">
      <div className="title">
        <MovieListHeading heading="Movie" />
        <SearchBox searchValue={setSearch} />
      </div>
      <div className="row-hani">
        <MovieLIst
          movie={movie}
          AddFaourite={AddFavourite}
          favouriteMovie={setFavourite}
        />
      </div>
      <div>
        <h1>favourite movies</h1>
        <div className="favourite-list">
          {favourite.map((ele) => (
            <div>
              <img src={ele.Poster} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
