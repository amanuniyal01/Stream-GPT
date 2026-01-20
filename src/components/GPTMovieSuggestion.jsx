import React from 'react'
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer'
import MovieList from './MovieList'


function GPTMovieSuggestion() {

  const { gptMovieNames, gptMovieResults, isLoading } = useSelector((store) => store.gpt)
  if (!gptMovieNames || !gptMovieResults) {
    return null
  }
   if (isLoading) {
    return <Shimmer />
  }

  return (
    <div className='bg-black'>

      {gptMovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptMovieResults[index]}
        />
      ))}
    </div>
  )
}

export default GPTMovieSuggestion