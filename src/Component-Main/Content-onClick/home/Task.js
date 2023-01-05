import React, { useState } from 'react';
import './Task.css';

export default function Task(props) {
    return (
        <div draggable className = 'task-item' id = { props.id }>
            {props.title}
            <div
                className = 'task-item-tags'
                key = { props.tag.id }
                style = {{ backgroundColor: props.tag.backgroundColor }}
            >
                {props.tag.tagsName}
            </div>
            <div onClick = { props.deleteTask }>x</div>
        </div>
    );
}
