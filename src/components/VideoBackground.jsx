import { useSelector } from "react-redux"
import UseTrailerVideo from "../Hooks/UseTrailerVideo"

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector(
    (store) => store.movies?.getTrailerVideo
  )

  UseTrailerVideo(movieId)

  return (
    <div className="relative w-screen z-0 h-screen overflow-hidden">
  <iframe
    className="absolute top-0 left-0 w-full h-full scale-125 "
    src={
      "https://www.youtube.com/embed/" +
      trailerVideo?.key +
      "?autoplay=1&mute=1&controls=0&rel=0"
    }
    title="YouTube video player"
    allow="autoplay; encrypted-media"
  ></iframe>
</div>

  )
}

export default VideoBackground
