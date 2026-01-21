import { createSlice } from "@reduxjs/toolkit";

const moviePopupSlice = createSlice({
  name: "moviePopup",
  initialState: {
    isOpen: false,
    movieId: null,
    details: null,
    trailer: null,
    loading: false,
    cast: [],      
    similar: [],
    showTrailer: false,
  },
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
      state.movieId = action.payload;
      state.loading = true;
      state.showTrailer = false;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.movieId = null;
      state.details = null;
      state.trailer = null;
      state.cast = [];
      state.similar = [];
      state.showTrailer = false;
      state.loading = false;
    },
    setPopupData: (state, action) => {
      state.details = action.payload.details;
      state.trailer = action.payload.trailer;
      state.cast = action.payload.cast;
      state.similar = action.payload.similar;
      state.loading = false;
    },
    playTrailer: (state) => {
      state.showTrailer = true;
    },
    stopTrailer: (state) => {
      state.showTrailer = false;
    },
  },
});


export const { openPopup, closePopup, setPopupData, playTrailer, stopTrailer } = moviePopupSlice.actions;


export default moviePopupSlice.reducer;
