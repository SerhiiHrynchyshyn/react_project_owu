import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    currentPage: 1,
    status: null
}

export const getByGenre = createAsyncThunk(
    'movieSlice/getByGenre',
    async ({genreId, page}) => {
        try {
            return await movieService.getByGenre(genreId, page)

        } catch (e) {
            console.log(e.message)
        }
    }
)

export const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (page) => {
        try {
            return await movieService.getAll(page);
        } catch (e) {
            console.log(e.message)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        MOVIE__PAGE: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: {
        [getMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload;
        },
        [getByGenre.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload;
        },
    }
});

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {MOVIE__PAGE, MOVIE__GENRE} = movieSlice.actions;
