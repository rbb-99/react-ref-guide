import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  //still an asynchronous code
  const fetchMoviesHandler = async () => {
    const responsePromise = await fetch("https://swapi.dev/api/films");
    const data = await responsePromise.json();
    const transformedMovies = data.results.map((movieObject) => {
      return {
        id: movieObject.episode_id,
        title: movieObject.title,
        openingText: movieObject.opening_crawl,
        releaseDate: movieObject.release_date,
      };
    });
    setMovies(transformedMovies);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
