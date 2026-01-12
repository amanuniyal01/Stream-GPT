import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies)
  const langKey=useSelector((store)=>store.lang.lang)
  return (
    movies.nowPlayingMovies && (
      <div className='secondary -mt-50   '>
        <div className='relative  z-20'>  <MovieList title={lang[langKey].Playing} movies={movies.nowPlayingMovies} />
          <MovieList title={lang[langKey].Trending} movies={movies.TopRatedMovies} />
          <MovieList title={lang[langKey].Popular} movies={movies.nowPopularMovies} />
          <MovieList title={lang[langKey].Horror} movies={movies.horrorMovies} />
          <MovieList title={lang[langKey].upcoming} movies={movies.upcomingMovies} />
        </div>
      </div>)
  )
}

export default SecondaryContainer