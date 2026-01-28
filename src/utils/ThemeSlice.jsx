import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: localStorage.getItem("theme") || "light"
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        }
    }
})
export const { toggleTheme } = ThemeSlice.actions
export default ThemeSlice.reducer