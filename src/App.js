import React, { useCallback, useEffect, useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

/* The React useCallback Hook returns a memoized callback function.
Think of memoization as caching a value so that it does not need to be recalculated.
This allows us to isolate resource intensive functions so that they will not automatically run on every render.
The useCallback Hook only runs when one of its dependencies update.This can improve performance.
The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value 
and useCallback returns a memoized function. You can learn more about useMemo in the useMemo chapter.
One reason to use useCallback is to prevent a component from re-rendering unless its props have changed. */

  const fetchMoviesHandler = useCallback(async () => {
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
  }, []); // here, we add external dependencies but there aren't any (setError, setMovies,... are handled internally)

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

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
