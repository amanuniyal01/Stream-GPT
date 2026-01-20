import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'
import groq from '../utils/groq'

function GPTSearchBar() {
  const langKey = useSelector((store) => store.lang.lang)
  const SearchText = useRef(null)
const handleGptApiSearch = async () => {
  try {
    const userQuery = SearchText.current.value;
    console.log("User Input:", userQuery);

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content:
            `Suggest 10 latest   movies related to "${userQuery}". 
             Return comma-separated movie names only don't show me actors names.eg:Dhamaal,Sultan,MAD,Dangal`
        }
      ],
    });

    console.log("FULL GPT RESPONSE:", response);
    console.log(
      "MOVIES:",
      response.choices[0].message.content
    );

  } catch (err) {
    console.error("Groq Error:", err);
  }
  const gptMovies=response.choices[0].message.content
};


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
          type="button"
          onClick={handleGptApiSearch}>

          {lang[langKey].search}
        </button>

      </form>
    </div>
  )
}

export default GPTSearchBar
