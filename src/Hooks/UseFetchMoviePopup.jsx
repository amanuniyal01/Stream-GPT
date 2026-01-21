import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPopupData } from "../utils/moviePopupSlice";
import { API_OPTIONS } from "../utils/constants";
const useFetchMoviePopup = (movieID) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!movieID) return;

        const fetchData = async () => {
            try {
                const [detailRes, videoRes, creditRes, similarRes] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/movie/${movieID}`, API_OPTIONS),
                    fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos`, API_OPTIONS),
                    fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits`, API_OPTIONS),
                    fetch(`https://api.themoviedb.org/3/movie/${movieID}/similar`, API_OPTIONS),
                ]);

                const detailData = await detailRes.json();
                const videoData = await videoRes.json();
                const creditData = await creditRes.json();
                const similarData = await similarRes.json();

                dispatch(
                    setPopupData({
                        details: detailData,
                        trailer: videoData.results?.find((v) => v.type === "Trailer"),
                        cast: creditData.cast?.slice(0, 12),
                        similar: similarData.results?.slice(0, 12),
                    })
                );
            } catch (error) {
                console.error("Failed to load movie modal data:", error);
            }
        };

        fetchData();
    }, [movieID, dispatch]);
};

export default useFetchMoviePopup;