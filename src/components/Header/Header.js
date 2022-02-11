import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <header className={'header'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/movies'}>Movies</NavLink>
        </header>
    );
};

export {Header};