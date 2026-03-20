import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

function GPTSearch() {
  return (
    <div className="relative w-full h-screen transition-colors duration-500">
  
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/IN-en-20251201-TRIFECTA-perspective_c7623e8e-c406-43d2-9d9a-0140ce19ac84_medium.jpg"
        alt="Gpt-Background"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />

   
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 -z-5"></div>

 
      <div className="relative z-10">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
}

export default GPTSearch;
