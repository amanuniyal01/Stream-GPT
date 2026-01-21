import React from "react";

function CastCard({ profilePath, name, character }) {
  return (
    <div className="w-24 flex-shrink-0 flex flex-col items-center text-center">
      <img
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w200${profilePath}`
            : "/placeholder.png"
        }
        alt={name}
        className="w-20 h-28 rounded-lg object-cover"
      />
      <p className="text-sm font-semibold text-white mt-1">{name}</p>
      <p className="text-xs text-gray-300">{character}</p>
    </div>
  );
}

export default CastCard;
