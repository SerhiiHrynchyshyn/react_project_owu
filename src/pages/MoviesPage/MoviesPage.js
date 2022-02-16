import React from 'react';
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <>
            <Outlet/>
        </>
    );
};

export {MoviesPage};