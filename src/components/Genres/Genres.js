import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Genres.css';
import {getAllGenres} from "../../store/slices/genreSlice";
import {Genre} from "../Genre/Genre";

const Genres = () => {
    const {genres} = useSelector(state => state['genreReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch])

    return (
        <>
            <h2>Genres</h2>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </>
    )
};

export {Genres};