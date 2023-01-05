import React from 'react';
import './PointNav.css';

export default function PointNav(props) {
    return (
        <div className = 'btn-nav'>
            <img alt = 'img' key = { props.id } src = { props.img } onClick = { () => console.log(props.name) } />
        </div>
    );
}
