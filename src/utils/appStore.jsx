
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import langReducer from "./ConfigSlice"
import moviePopupReducer from "./moviePopupSlice"
import ThemeSlice from "./ThemeSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    lang: langReducer,
    moviePopup: moviePopupReducer,
    Theme: ThemeSlice
  },
});

export default appStore;
