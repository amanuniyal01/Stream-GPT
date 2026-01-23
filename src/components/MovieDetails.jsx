import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup, playTrailer, stopTrailer } from '../utils/moviePopupSlice';
import useFetchMoviePopup from '../Hooks/UseFetchMoviePopup';
import CastCard from './CastCard';
import Shimmer from './Shimmer';
import MovieDetailShimmer from './MovieDetailShimmer';
import SimilarMovieCard from './SimilarMovieCard';
import MovieCard from './MovieCard';
import { CDN_URL } from '../utils/constants';

function MovieDetails() {
    const dispatch = useDispatch();
    const { isOpen, movieId, details, loading, cast, similar, trailer, showTrailer } = useSelector(
        (store) => store.moviePopup
    );


    useFetchMoviePopup(movieId);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                if (showTrailer) {
                    dispatch(stopTrailer());
                } else if (isOpen) {
                    dispatch(closePopup());
                }
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [showTrailer, isOpen, dispatch]);

    if (!isOpen) return null;
    return (
        <div className="fixed  inset-0 bg-black flex justify-center items-center overflow-y-auto z-50">
            <div className="bg-black text-white rounded-xl p-6 w-full h-full  relative">
                <button
                    className="absolute z-50 top-4 right-4 font-bold  text-red-500 text-6xl"
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
                                className="w-full h-[500px] object-cover rounded-xl"
                            />

                            <div className="absolute inset-0 bg-black/60 rounded-xl" />
                        </div>

                        {/* CONTENT */}
                        <div className="flex absolute gap-6 mt-6 top-30 left-20">
                            {/* POSTER */}
                            <img
                                src={CDN_URL + details.poster_path}
                                className="w-[200px] rounded-lg"
                            />


                            {/* INFO */}
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col gap-2'> <h1 className="text-4xl font-bold">{details.title}</h1>

                                    <p className="mt-3 text-[20px] max-w-150 text-gray-300">
                                        {details.overview.split(" ").slice(0, 50).join(" ")}
                                        {details.overview.split(" ").length > 50 && "..."}
                                    </p>
                                </div>
                                <div>
                                    <button onClick={() => { dispatch(playTrailer()) }} className='flex ml-40 items-center justify-center rounded-lg shadow-2xl  font-bold p-4 bg-white/100 text-black
                                        hover:bg-white/50 cursor-pointer'>     ▶ Play Trailer</button>
                                </div>
                            </div>

                        </div>

                        <h2 className="text-4xl mt-15 font-bold mb-3 mx-4 sm:mx-12 text-white">
                            Cast
                        </h2>

                        <div className="flex scrollbar-hide gap-3 sm:gap-4 overflow-x-scroll mx-4 sm:mx-12  mb-10">
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
                        <h2 className="text-4xl text-shadow-white mt-20  font-bold mb-3 mx-4 sm:mx-12 text-white">
                            You'll Also Like
                        </h2>

                        <div className="flex scrollbar-hide cursor-pointer mt-10 gap-3 sm:gap-4 overflow-x-scroll mx-4 sm:mx-12 no-scrollbar mb-10">
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
            </div>
            {showTrailer && trailer && (
                <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
                    <button
                        className="absolute top-6 right-6 text-white text-6xl"
                        onClick={() => dispatch(stopTrailer())}
                    >
                        ×
                    </button>

                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
                        allow="autoplay; encrypted-media; fullscreen"
                        title="Trailer"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
}

export default MovieDetails;
