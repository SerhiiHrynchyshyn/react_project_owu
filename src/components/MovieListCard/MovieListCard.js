import React from 'react';
import {Link} from "react-router-dom";

import './MovieListCard.css';
import {imageUrl} from "../../config/urls";

const MovieListCard = ({movie}) => {
    const {id, title, poster_path} = movie;

    return (
        <div className={'card'}>
            <Link to={`/movies/${id.toString()}`}>
                <div className={'movie'}>
                    <img src={imageUrl + poster_path} alt={title}/>
                    <div>{title}</div>
                </div>
            </Link>
        </div>

);
};

export {MovieListCard};