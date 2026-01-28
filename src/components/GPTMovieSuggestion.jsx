import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import MovieList from "./MovieList";

function GPTMovieSuggestion() {
  const { gptMovieNames, gptMovieResults, isLoading } = useSelector(
    (store) => store.gpt
  );

  if (!gptMovieNames || !gptMovieResults) {
    return null;
  }

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div
      className="
        min-h-screen
        bg-white dark:bg-black
        text-black dark:text-white
        bg-gradient-to-b
        from-white/95 dark:from-black/95
        via-white/80 dark:via-black/80
        to-white/60 dark:to-black/60
        transition-colors duration-500
        p-4
      "
    >
      {gptMovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptMovieResults[index]}
        />
      ))}
    </div>
  );
}

export default GPTMovieSuggestion;
