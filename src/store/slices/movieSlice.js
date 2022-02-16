import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: {},
    status: null
}

export const getByGenre = createAsyncThunk(
    'movieSlice/getByGenre',
        async ({genreId}) => {
            try {
                return await movieService.getByGenre(genreId)
            } catch (e) {
                console.log(e.message)
            }
        }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getByGenre.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload;
        }
    }
});

const movieReducer = movieSlice.reducer;
export default movieReducer;
