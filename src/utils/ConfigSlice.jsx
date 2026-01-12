import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({

    name: "language",
    initialState: {
        lang: "en"

    },
    reducers: {
        changeLanguage:(state, action) => {
            state.lang = action.payload
        }

    }

})
export default ConfigSlice.reducer
export const {changeLanguage}=ConfigSlice.actions