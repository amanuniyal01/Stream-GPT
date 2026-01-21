import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup, setPopupData } from '../utils/moviePopupSlice';
import useFetchMoviePopup from '../Hooks/UseFetchMoviePopup';
import CastCard from './CastCard';
import Shimmer from './Shimmer';
import MovieDetailShimmer from './MovieDetailShimmer';
import SimilarMovieCard from './SimilarMovieCard';
import MovieCard from './MovieCard';
import { CDN_URL } from '../utils/constants';

function MovieDetails() {
    const dispatch = useDispatch();
    const { isOpen, movieId, details, loading, cast, similar } = useSelector(
        (store) => store.moviePopup
    );


    useFetchMoviePopup(movieId);

    if (!isOpen) return null;

    return (
        <div className="fixed  inset-0 bg-black flex justify-center items-center overflow-y-auto z-50">
            <div className="bg-black text-white rounded-xl p-6 w-full h-full  relative">
                <button
                    className="absolute z-50 top-4 right-4 font-bold  text-red-500 text-6xl"
                    onClick={() => dispatch(closePopup())}
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
                            <div>
                                <h1 className="text-5xl font-bold">{details.title}</h1>
                                <p className="mt-3 text-2xl max-w-150 text-gray-300">{details.overview}</p>
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
                        <h2 className="text-4xl mt-10  font-bold mb-3 mx-4 sm:mx-12 text-white">
                            Similar Movies
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
        </div>
    );
}

export default MovieDetails;
