import React, { useState, useEffect } from "react";
import userImage from "../assets/user.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { toggleGptSearch } from "../utils/gptSlice";
import { LANGUAGE_OPTION } from "../utils/constants";
import { changeLanguage } from "../utils/ConfigSlice";
import lang from "../utils/languageConstant";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.lang.lang);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ToggleGptFunction = () => {
    dispatch(toggleGptSearch());
    setMenuOpen(false);
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
    setMenuOpen(false);
  };

  const UserSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        setMenuOpen(false);
      })
      .catch(() => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black z-50 px-6 py-3">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          className="h-8 md:h-12"
          src="https://i.ibb.co/SNKRx9w/Netflixlogo.png"
          alt="Netflix Logo"
        />

        {/* Hamburger (Mobile Only) */}
        {user && (
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        )}

        {/* Desktop Menu */}
        {user && (
          <div className="hidden md:flex items-center gap-4">
            <select
              onChange={handleChangeLanguage}
              className="bg-white/20 backdrop-blur-md text-white font-semibold px-4 py-2 rounded-xl border border-white/30 shadow-lg"
            >
              {LANGUAGE_OPTION.map((langItem) => (
                <option
                  key={langItem.identifier}
                  value={langItem.identifier}
                  className="bg-black text-white"
                >
                  {langItem.name}
                </option>
              ))}
            </select>

            <button
              onClick={ToggleGptFunction}
              className={`${
                showGptSearch
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold px-4 py-2 rounded-lg shadow-lg`}
            >
              {showGptSearch
                ? `🏠 ${lang[langKey].Home}`
                : `🤖 ${lang[langKey].gptSearch}`}
            </button>

            <button
              onClick={UserSignOut}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-bold"
            >
              {lang[langKey].SignOut}
            </button>

            <img
              className="h-10 w-10 rounded-full border-2 border-white cursor-pointer"
              src={userImage}
              alt="User"
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {user && menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 bg-black/90 p-4 rounded-xl">
          <select
            onChange={handleChangeLanguage}
            className="bg-white/20 text-white px-4 py-2 rounded-lg"
          >
            {LANGUAGE_OPTION.map((langItem) => (
              <option
                key={langItem.identifier}
                value={langItem.identifier}
                className="bg-black text-white"
              >
                {langItem.name}
              </option>
            ))}
          </select>

          <button
            onClick={ToggleGptFunction}
            className={`${
              showGptSearch
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-4 py-2 rounded-lg`}
          >
            {showGptSearch
              ? `🏠 ${lang[langKey].Home}`
              : `🤖 ${lang[langKey].gptSearch}`}
          </button>

          <button
            onClick={UserSignOut}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-bold"
          >
            {lang[langKey].SignOut}
          </button>

          <img
            className="h-10 w-10 rounded-full border-2 border-white self-center"
            src={userImage}
            alt="User"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
