import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import './MovieList.css';
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {getByGenre, getMovies, MOVIE__PAGE} from "../../store/slices/movieSlice";

const MovieList = () => {

    const {movies, currentPage} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();
    const {genreId} = useParams();

    useEffect(() => {

        if (genreId) {
            dispatch(getByGenre({genreId}))
            return
        }
        dispatch(getMovies(currentPage));

    }, [currentPage, genreId])

    return (
        <>
            <div className={'cards_container'}>
                {movies.results?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={'movie-btn'}>
                <button onClick={() => dispatch(MOVIE__PAGE(1))}>1...</button>
                <button onClick={() => dispatch(MOVIE__PAGE(currentPage - 1))}
                        disabled={currentPage === 1}>{'< ' + (currentPage - 1)}</button>

                {currentPage > 1 ? <p>{`< ${currentPage} >`}</p> : '< 1 >'}

                <button onClick={() => dispatch(MOVIE__PAGE(currentPage + 1))}
                        disabled={currentPage === 500}>{(currentPage + 1) + ' >'}</button>
                <button onClick={() => dispatch(MOVIE__PAGE(500))}>...500</button>
            </div>
        </>
    );
};

export {MovieList};