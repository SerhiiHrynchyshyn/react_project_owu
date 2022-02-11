import {configureStore} from "@reduxjs/toolkit";
import genreReducer from "./slices/genreSlice";


const store = configureStore({
    reducer:{
        genreReducer
    }
})

export default store;