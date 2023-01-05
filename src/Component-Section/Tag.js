import React from 'react';
import './Section-menu.css';

export default function Tag(props) {
    return <div style = {{ backgroundColor: props.backgroundColor }}>{props.name}</div>;
}
