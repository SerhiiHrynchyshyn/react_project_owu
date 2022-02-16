import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import './MovieList.css';
import {getByGenre} from "../../store/slices/movieSlice";
import {MovieListCard} from "../MovieListCard/MovieListCard";

const MovieList = () => {

    const {movies} = useSelector(state => state['movieReducer']);
    const {genreId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getByGenre({genreId}));
        console.log(movies)
        console.log(genreId)
    }, [dispatch, genreId])

    return (
        <>
            <div className={'cards_container'}>
                {movies.results?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                перемикачі
            </div>
        </>
    );
};

export {MovieList};