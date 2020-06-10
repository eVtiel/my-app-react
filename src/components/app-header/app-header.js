import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPost}) => {
    return (
        <div className="app-header d-flex">
            <h1>Alex Shapovalov</h1>
        <h2>{allPost} posts, liked {liked}</h2>
        </div>
    )
}

export default AppHeader;