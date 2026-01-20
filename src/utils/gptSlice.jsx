import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovieNames: null,
        gptMovieResults: null,
        isLoading: false
    },
    reducers: {

        startGptSearch: (state) => {
            state.isLoading = true

        },
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        showGptMovieResults: (state, action) => {
            const { gptMovieNames, gptMovieResults } = action.payload;
            state.gptMovieNames = gptMovieNames,
                state.gptMovieResults = gptMovieResults,
                state.isLoading = false

        }
    }
})

export default gptSlice.reducer
export const { toggleGptSearch, showGptMovieResults, startGptSearch } = gptSlice.actions