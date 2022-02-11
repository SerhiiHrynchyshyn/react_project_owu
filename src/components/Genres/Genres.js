import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllGenres} from "../../store/slices/genreSlice";
import {Genre} from "../Genre/Genre";

const Genres = () => {
    const {genres} = useSelector(state => state['genreReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch])

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    )
};

export {Genres};