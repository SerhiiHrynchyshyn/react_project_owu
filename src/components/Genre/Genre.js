import React from 'react';

const Genre = ({genre:{id, name}}) => {
    return (
        <>
            <ul>
                <li>{name}</li>
            </ul>
        </>
    );
};

export {Genre};