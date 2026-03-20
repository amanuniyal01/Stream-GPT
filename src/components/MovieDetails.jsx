import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closePopup,
  playTrailer,
  stopTrailer,
} from "../utils/moviePopupSlice";
import useFetchMoviePopup from "../Hooks/UseFetchMoviePopup";
import CastCard from "./CastCard";
import MovieDetailShimmer from "./MovieDetailShimmer";
import SimilarMovieCard from "./SimilarMovieCard";
import { CDN_URL } from "../utils/constants";

function MovieDetails() {
  const dispatch = useDispatch();
  const {
    isOpen,
    movieId,
    details,
    loading,
    cast,
    similar,
    trailer,
    showTrailer,
  } = useSelector((store) => store.moviePopup);

  useFetchMoviePopup(movieId);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        showTrailer ? dispatch(stopTrailer()) : dispatch(closePopup());
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showTrailer, dispatch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-black overflow-y-auto">
      <div className="relative w-full min-h-screen text-black dark:text-white">

        {/* CLOSE BUTTON */}
        <button
          className="fixed top-4 right-4 z-50 text-4xl md:text-6xl font-bold text-red-500"
          onClick={() => {
            dispatch(stopTrailer());
            dispatch(closePopup());
          }}
        >
          ×
        </button>

        {loading ? (
          <MovieDetailShimmer />
        ) : (
          <>
            {/* BACKDROP */}
            <div className="relative">
              <img
                src={CDN_URL + details.backdrop_path}
                className="w-full h-[220px] sm:h-[320px] md:h-[500px] object-cover"
                alt="backdrop"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

        
            <div className="relative z-10 px-4 sm:px-8 md:px-20 -mt-30 md:-mt-90">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">

                {/* POSTER */}
                <img
                  src={CDN_URL + details.poster_path}
                  className="w-[140px] sm:w-[160px] md:w-[220px] rounded-xl mx-auto md:mx-0"
                  alt="poster"
                />

                {/* INFO */}
                <div className="flex flex-col justify-between gap-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
                    {details.title}
                  </h1>

                  <p className="text-sm sm:text-base text-gray-300 max-w-2xl text-center md:text-left">
                    {details.overview.split(" ").slice(0, 50).join(" ")}
                    {details.overview.split(" ").length > 50 && "..."}
                  </p>

                  <button
                    onClick={() => dispatch(playTrailer())}
                    className="w-full sm:w-fit px-6 py-3 rounded-lg font-bold bg-white text-black hover:bg-white/70"
                  >
                    ▶ Play Trailer
                  </button>
                </div>
              </div>
            </div>

            {/* CAST */}
            <h2 className="text-2xl md:text-4xl font-bold mt-20 mb-4 px-4 sm:px-8 md:px-20">
              Cast
            </h2>

            <div className="flex scrollbar-hide gap-4 overflow-x-auto px-4 sm:px-8 md:px-20 mb-12">
              {cast.map((actor) => (
                <CastCard
                  key={actor.id}
                  profilePath={actor.profile_path}
                  name={actor.name}
                  character={actor.character}
                />
              ))}
            </div>

            {/* SIMILAR MOVIES */}
            <h2 className="text-2xl md:text-4xl font-bold mt-16 mb-4 px-4 sm:px-8 md:px-20">
              You’ll Also Like
            </h2>

            <div className="flex scrollbar-hide gap-4 overflow-x-auto px-4 sm:px-8 md:px-20 mb-16">
              {similar.map((movie) => (
                <SimilarMovieCard
                  key={movie.id}
                  posterPath={movie.poster_path}
                  title={movie.title}
                  movieId={movie.id}
                />
              ))}
            </div>
          </>
        )}

        {/* TRAILER */}
        {showTrailer && trailer && (
          <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
            <button
              className="absolute top-6 right-6 text-white text-5xl"
              onClick={() => dispatch(stopTrailer())}
            >
              ×
            </button>

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
              allow="autoplay; encrypted-media; fullscreen"
              title="Trailer"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
