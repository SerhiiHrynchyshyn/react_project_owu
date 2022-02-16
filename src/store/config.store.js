import {configureStore} from "@reduxjs/toolkit";

import genreReducer from "./slices/genreSlice";
import movieReducer from "./slices/movieSlice";

const store = configureStore({
    reducer: {
        genreReducer,
        movieReducer
    }
})

export default store;