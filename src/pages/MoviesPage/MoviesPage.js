import React from 'react';

import './MoviesPage.css';
import {Genres} from "../../components";

const MoviesPage = () => {
    return (
        <main>
            <div className={'mainContent'}>
                <div className={'sideBar'}>
                    <ul>
                        <li><Genres/></li>
                    </ul>
                </div>
                <div className={'content'}>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                    <div>Content</div>
                </div>
            </div>
        </main>
    );
};

export {MoviesPage};