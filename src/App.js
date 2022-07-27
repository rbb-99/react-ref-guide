import React, { useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

// when user land s on the page the content should be loaded. 
// for this use useEffect hook because sending this http request 
// is a side effect which ultimately changes our component's state;
// having side effects in a function is also fine as long as you don't 
// call this function as part pf your main component function (here, App)
// because then there can be an infinite loop where you call this function,
// it updates the state, the component function re-renders/is re-evaluated
// and the component function is called again ... Hence, useEffect()

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // with the following we render it only once (initially)
  useEffect(()=>{
    fetchMoviesHandler()
  }, [])
  // now we want to add fetchMoviesHandler as a dependency 
  // because any changes in it must be re-evaluated
  // useEffect(()=>{
  //   fetchMoviesHandler()
  // }, [fetchMoviesHandler])
  // but the above gets into an infinite loop, so we use callBack()

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const responsePromise = await fetch("https://swapi.dev/api/films");
      if (!responsePromise.ok) {
        throw new Error("Something went wrong!");
      }
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
