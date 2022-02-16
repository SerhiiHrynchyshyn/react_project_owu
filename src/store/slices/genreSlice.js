import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    status: null
}

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async () => {
        try {
            return await genreService.getAll()
        } catch (e) {
            return console.log(e.message)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.genres = action.payload;
        }
    }
});

const genreReducer = genreSlice.reducer;
export default genreReducer;

