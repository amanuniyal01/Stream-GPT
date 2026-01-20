import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ title, movies }) {
  return (
    <div className="px-6 py-4   ">

      <h1 className=" title text-xl md:text-3xl font-bold text-white my-3 ">
        {title}
      </h1>


      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex gap-3">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              movieId={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
