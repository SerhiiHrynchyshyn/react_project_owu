import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
}

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async () => {
        try {
            return await genreService.getAll()
        } catch (e) {
            return console.log(e)
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

