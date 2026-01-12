import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

function GPTSearchBar() {
  const langKey = useSelector((store) => store.lang.lang)
  const SearchText = useRef(null)
  const handleGptApiSearch = () => {
    console.log(SearchText.current.value)

  }
  return (
    <div className="z-30 pt-40  flex justify-center px-4">
      <form className="bg-white/10  backdrop-blur-md  w-full max-w-3xl border-white/10 rounded-lg p-4 flex flex-col sm:flex-row gap-2"
        onSubmit={(e) => e.preventDefault()}>

        <input
          ref={SearchText}

          className="flex-grow font-bold bg-white p-4 rounded-lg"
          name="searchbar"
          placeholder={lang[langKey].gptSearchBarText}
          type="text"
        />

        <button className="bg-red-700 hover:bg-red-800 cursor-pointer text-white font-bold px-10 py-4 rounded-lg"
          onClick={handleGptApiSearch}>
          {lang[langKey].search}
        </button>

      </form>
    </div>
  )
}

export default GPTSearchBar
