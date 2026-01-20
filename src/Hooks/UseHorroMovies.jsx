import { addHorrorMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const UseHorrorMovies = () => {
    const dispatch = useDispatch()

    const getHorrorMovies = async () => {

        const data = await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27&page=1', API_OPTIONS)

        const json = await data.json();
  

        dispatch(addHorrorMovies(json.results))
    }

    useEffect(() => {
        getHorrorMovies()
    }, [])
}

export default UseHorrorMovies;