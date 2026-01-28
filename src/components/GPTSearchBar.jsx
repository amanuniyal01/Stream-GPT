import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import groq from "../utils/groq";
import { API_OPTIONS } from "../utils/constants";
import { showGptMovieResults, startGptSearch } from "../utils/gptSlice";

function GPTSearchBar() {
  const langKey = useSelector((store) => store.lang.lang);
  const SearchText = useRef(null);
  const dispatch = useDispatch();

  const searchTMDBMovies = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptApiSearch = async () => {
    try {
      dispatch(startGptSearch());
      const userQuery = SearchText.current.value;

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
`,
          },
        ],
      });

      const gptMovies = response.choices[0].message.content
        .replace(/\n/g, "")
        .split(",");
      const PromisesMovies = gptMovies.map((movie) => searchTMDBMovies(movie));
      const ResultsTmdb = await Promise.all(PromisesMovies);

      dispatch(
        showGptMovieResults({ gptMovieNames: gptMovies, gptMovieResults: ResultsTmdb })
      );
    } catch (err) {
      console.error("Groq Error:", err);
    }
  };

  return (
    <div className="z-30 pt-28 sm:pt-36 flex justify-center px-4">
      <form
        className="
          w-full max-w-3xl
          flex flex-col sm:flex-row gap-2
          p-4 rounded-lg
          border border-white/10
          bg-black/40 dark:bg-black/60 backdrop-blur-md
          transition-colors duration-500
        "
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Input */}
        <input
          ref={SearchText}
          className="
            flex-grow
            px-3 py-2 sm:px-4 sm:py-3
            text-sm sm:text-base
            rounded-lg
            font-bold
            bg-white/90 dark:bg-gray-800
            text-black dark:text-white
            placeholder-black/60 dark:placeholder-white/70
            outline-none
            transition-colors duration-300
          "
          name="searchbar"
          placeholder={lang[langKey].gptSearchBarText}
          type="text"
        />

        {/* Search Button */}
        <button
          className="
            bg-red-700 hover:bg-red-800
            dark:bg-red-600 dark:hover:bg-red-700
            text-white font-bold
            px-6 sm:px-10 py-3 sm:py-4
            rounded-lg
            transition-all duration-300
            whitespace-nowrap
          "
          type="button"
          onClick={handleGptApiSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GPTSearchBar;
