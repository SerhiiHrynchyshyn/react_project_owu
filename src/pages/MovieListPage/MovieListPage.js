import React from 'react';

import './MovieListPage.css';
import {Genres, MovieList} from "../../components";

const MovieListPage = () => {
    return (
        <main className={'main'}>
            <div className={'container'}>
                <div className={'sideBar'}>
                    <Genres/>
                </div>
                <div className={'content'}>
                    <MovieList/>
                </div>
            </div>
        </main>
    );
};

export {MovieListPage};