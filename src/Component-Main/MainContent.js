import React from 'react';
import Contents from './Contents';
import Filter from './Filter';
import './Main.css';

export default function MainContent(props) {
    return (
        <div className = 'wrapper-main-content'>
            <div className = 'heading'>All</div>
            <Filter tags = { props.tags } />
            <Contents tags = { props.tags } />
        </div>
    );
}
