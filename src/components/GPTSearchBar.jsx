import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import groq from '../utils/groq'
import { API_OPTIONS } from '../utils/constants'
import { showGptMovieResults, startGptSearch } from '../utils/gptSlice'

function GPTSearchBar() {
  const langKey = useSelector((store) => store.lang.lang)
  const SearchText = useRef(null)
  const dispatch = useDispatch()



  // We will search movies on TMDB
  const searchTMDBMovies = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await data.json()
    return json.results

  }
  const handleGptApiSearch = async () => {
    try {
      dispatch(startGptSearch())
      const userQuery = SearchText.current.value;
      console.log("User Input:", userQuery);

      const response = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "user",
            content: `
You are a movie name generator.

RULES:
- Output ONLY movie names
- NO sentences
- NO explanations
- NO numbering
- NO extra text
- Separate movies using commas only

Query: "${userQuery}"

Example output:
Dhamaal,Sultan,MAD,Dangal
`
          }
        ],
      });



      const gptMovies = response.choices[0].message.content.replace(/\n/g, "").split(",")
      console.log(gptMovies)
      const PromisesMovies = gptMovies.map(movie => searchTMDBMovies(movie))
      const ResultsTmdb = await Promise.all(PromisesMovies)
      console.log(ResultsTmdb)
      dispatch(showGptMovieResults({ gptMovieNames: gptMovies, gptMovieResults: ResultsTmdb }))


    } catch (err) {
      console.error("Groq Error:", err);


    }


  };


  return (
    <div className="z-30 pt-28 sm:pt-36 flex justify-center px-4">

      <form className="bg-white/10  backdrop-blur-md  w-full max-w-3xl border-white/10 rounded-lg p-4 flex flex-col sm:flex-row gap-2"
        onSubmit={(e) => e.preventDefault()}>
        <input
  ref={SearchText}
  className=" flex-grow bg-white text-black font-bold px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-base rounded-lg   outline-none "
  name="searchbar"
  placeholder={lang[langKey].gptSearchBarText}
  type="text"
/>



        <button className="bg-red-700 hover:bg-red-800 transition-all cursor-pointer text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-lg whitespace-nowrap"
          type="button"
          onClick={handleGptApiSearch}>

          {lang[langKey].search}
        </button>

      </form>
    </div>
  )
}

export default GPTSearchBar
