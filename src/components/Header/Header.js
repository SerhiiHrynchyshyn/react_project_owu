import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <header className={'header'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/movies'}>Movies</NavLink>
            <div className={'user'}>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user"/>
                <p>Serhii Hrynchyshyn</p>
            </div>
        </header>
    );
};

export {Header};