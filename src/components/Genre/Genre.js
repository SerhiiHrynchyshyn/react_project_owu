import React from 'react';
import {NavLink} from "react-router-dom";

import './Genre.css';

const Genre = ({genre: {id, name}}) => {
    return (
        <ul>
            <NavLink to={`/movies/genre/${id}`}>{name}</NavLink>
        </ul>
    );
};

export {Genre};

