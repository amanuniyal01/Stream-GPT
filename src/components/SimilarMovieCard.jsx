import { CDN_URL } from "../utils/constants";

const SimilarMovieCard = ({ posterPath, title }) => {
  return (
    posterPath && (
      <div className="relative w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] flex-shrink-0 rounded-xl overflow-hidden bg-gray-800">
        <img
          src={CDN_URL + posterPath}
          alt={title}
          className="w-full h-[180px] sm:h-[210px] md:h-[230px] lg:h-[250px] object-cover"
        />

       
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent px-2 py-2">
          <p className="text-white text-xs sm:text-sm font-semibold leading-tight truncate">
            {title}
          </p>
        </div>
      </div>
    )
  );
};

export default SimilarMovieCard;
