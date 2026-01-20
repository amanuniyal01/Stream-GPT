import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'


function MovieCard({ poster,movieId }) {
  if(!poster) return null
    return (
        <div  className="w-40  md:w-48 lg:w-52 shrink-0  transform transition duration-300  
        hover:scale-110 cursor-pointer rounded-2xl border  border-transparent hover:border-white/20 ">
            <img className='rounded-lg' src={CDN_URL + poster} alt="movies" />
        </div>
    )
}

export default MovieCard