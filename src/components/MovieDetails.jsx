import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup, setPopupData } from '../utils/moviePopupSlice';
import useFetchMoviePopup from '../Hooks/UseFetchMoviePopup';
import CastCard from './CastCard';
import Shimmer from './Shimmer';
import MovieDetailShimmer from './MovieDetailShimmer';
import SimilarMovieCard from './SimilarMovieCard';

function MovieDetails() {
    const dispatch = useDispatch();
    const { isOpen, movieId, details, loading, cast,similar } = useSelector(
        (store) => store.moviePopup
    );

    //  Call the custom hook at the top level
    useFetchMoviePopup(movieId);

    if (!isOpen) return null;

    return (
        <div className="fixed  inset-0 bg-black/80 flex justify-center items-center z-50">
            <div className="bg-black text-white rounded-xl p-6 w-full h-full  relative">
                <button
                    className="absolute top-4 right-4 text-red-500 text-2xl"
                    onClick={() => dispatch(closePopup())}
                >
                    ×
                </button>

                {loading ? (
                    <MovieDetailShimmer />
                ) : (
                    <>
                        <h1 className="text-2xl font-bold">{details?.title}</h1>
                        <p className="mt-2">{details?.overview}</p>
                        <h2 className="text-2xl font-semibold mb-3 mx-4 sm:mx-12 text-white">
                            Cast
                        </h2>

                        <div className="flex gap-3 sm:gap-4 overflow-x-scroll mx-4 sm:mx-12 no-scrollbar mb-10">
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
                        <h2 className="text-2xl font-semibold mb-3 mx-4 sm:mx-12 text-white">
                            Similar Movies
                        </h2>

                        <div className="flex gap-3 sm:gap-4 overflow-x-scroll mx-4 sm:mx-12 no-scrollbar mb-10">
                            {similar.map((movie) => (
                                <SimilarMovieCard
                                    key={movie.id}
                                    posterPath={movie.poster_path}
                                    title={movie.title}
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
