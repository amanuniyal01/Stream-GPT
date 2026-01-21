import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { openPopup } from "../utils/moviePopupSlice";

const SimilarMovieCard = ({ posterPath, title,movieId }) => {
    const dispatch=useDispatch()
  if (!posterPath) return null;

  return (
    <div onClick={()=>{dispatch(openPopup(movieId))}} className="w-[160px] mb-5 sm:w-[180px] md:w-[200px] lg:w-[220px] flex-shrink-0 hover:scale-105 transition-transform duration-300">
      <img
        src={CDN_URL + posterPath}
        alt={title}
        className="rounded-lg object-cover w-full h-[240px] sm:h-[270px] md:h-[300px]"
      />
   
    </div>
  );
};

export default SimilarMovieCard;
