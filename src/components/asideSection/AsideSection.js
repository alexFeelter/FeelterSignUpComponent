import React from 'react';
import './styleAsideSection.css';

import feelter from "./images/feelter.png"

export const AsideSection = () => {
    return <aside>
        <header>
            <a><img src={ feelter } alt="feelter"></img></a>
            </header>
    </aside>
}