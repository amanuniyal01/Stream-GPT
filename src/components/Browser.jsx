import { useSelector } from "react-redux"
import UseHorrorMovies from "../Hooks/UseHorroMovies"
import useNowPlayingMovies from "../Hooks/UseNowPlayingMovies"
import UsePopularMovies from "../Hooks/UsePopularMovies"
import UseTopRatedMovies from "../Hooks/UseTopRatedMovies"
import UseUpcomingMovies from "../Hooks/UseUpcomingMovies"
import GPTSearch from "./GPTSearch"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import Footer from "./Footer"

const Browser = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    useNowPlayingMovies()
    UseTopRatedMovies()
    UsePopularMovies()
    UseUpcomingMovies()
    UseHorrorMovies()
    return (
        <div>
            {/* 

MainContainer
    -VideoBackground
    -MovieTitle

MovieContainer
    -MovieLists
    -Cards
    
*/}


            {
                showGptSearch ? <GPTSearch /> : <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }

<Footer/>
        </div>
    )
}

export default Browser