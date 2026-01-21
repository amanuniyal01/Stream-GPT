import React from "react";

function CastCard({ profilePath, name, character }) {
    if (!profilePath) return null
    return (
        <div className="w-52 flex-shrink-0 flex flex-col items-center text-center">
            <img
                src={
                    profilePath
                        ? `https://image.tmdb.org/t/p/w200${profilePath}`
                        : "/placeholder.png"
                }
                alt={name}
                className="w-50 h-69 rounded-lg object-cover"
            />
            <p className="text-lg font-bold text-white mt-1">{name}</p>
            <p className="text-lg text-gray-300">{character}</p>
        </div>
    );
}

export default CastCard;
