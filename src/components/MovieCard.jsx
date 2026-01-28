import React from "react";
import { CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openPopup } from "../utils/moviePopupSlice";

function MovieCard({ poster, movieId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!poster) return null;

  return (
    <div
      onClick={() => dispatch(openPopup(movieId))}
      className="
        w-28 sm:w-32 md:w-36 lg:w-40
        shrink-0
        transform transition duration-300
        hover:scale-110
        cursor-pointer
        rounded-2xl
        border border-transparent
        hover:border-white/20
        dark:hover:border-gray-400
      "
    >
      <img
        className="rounded-lg shadow-md"
        src={CDN_URL + poster}
        alt="movie poster"
      />
    </div>
  );
}

export default MovieCard;
