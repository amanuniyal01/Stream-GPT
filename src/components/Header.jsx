import React from "react";
import userImage from "../assets/user.png";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth'
import { addUser } from '../utils/userSlice'
import { toggleGptSearch } from "../utils/gptSlice";
import { LANGUAGE_OPTION } from "../utils/constants";
import { changeLanguage } from "../utils/ConfigSlice";
import lang from "../utils/languageConstant";




const Header = () => {
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ToggleGptFunction = () => {
    dispatch(toggleGptSearch())
  }
  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value))

  }
  const langKey=useSelector((store)=>store.lang.lang)
  const UserSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())



      // Sign-out successful.
    }).catch((error) => {
      // An error happened.

    });
  }
  // Run only once on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid, email, displayName }))
        navigate("/browser")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    })

    return () => unsubscribe()
  }, [dispatch])
  return (
    <div className="absolute flex items-center justify-between w-full bg-gradient-to-b from-black z-50 px-6 py-3">

      <img
        className="h-8  ml-3 md:ml-12 mt-6 md:h-12"
        src="https://i.ibb.co/SNKRx9w/Netflixlogo.png"
        alt="Netflix Logo"
      />


      {/* Right Section: Button + User Avatar */}
      {user && (<div className="flex items-center gap-4">
        <select
  onChange={handleChangeLanguage}
  className="
    bg-white/20 backdrop-blur-md
    text-white font-semibold
    px-4 py-2
    rounded-xl
    border border-white/30
    shadow-lg
    outline-none
    cursor-pointer
    transition-all duration-300
    hover:bg-white/30
    focus:ring-2 focus:ring-white/50
  "
>
  {LANGUAGE_OPTION.map((lang) => (
    <option
      key={lang.identifier}
      value={lang.identifier}
      className="bg-black text-white font-medium"
    >
      {lang.name}
    </option>
  ))}
</select>

        <button
          onClick={ToggleGptFunction}
          className={`
    ${showGptSearch ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}
    text-white font-semibold
    px-4 py-2
    rounded-lg
    shadow-lg
    transition-all duration-300 ease-in-out
    hover:scale-105
    active:scale-95
    my-2
  `}
        >
          {showGptSearch ? `🏠${lang[langKey].Home}` : "🤖 GPT Search"}
        </button>

        <button onClick={UserSignOut} className="bg-red-600 hover:bg-red-700 transition px-2 md:px-4 py-1 md:py-2 rounded-md text-white font-bold">
          {lang[langKey].SignOut}
        </button>
        <img
          className=" h-6 w-6 md:h-10 md:w-10 rounded-full border-2 border-white cursor-pointer"
          src={userImage}
          alt="User"
        />
      </div>)}

    </div>
  );
};

export default Header;
