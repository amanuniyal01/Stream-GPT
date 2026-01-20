import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const UseUpcomingMovies = () => {
    const dispatch = useDispatch()

    const getNowUpcomingMovies = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS)

        const json = await data.json();
     

        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        getNowUpcomingMovies()
    }, [])
}

export default UseUpcomingMovies;