import React, { useState } from 'react';
import ContentClickOnHome from './Content-onClick/ContentClickOnHome';
import './Main.css';

export default function Contents(props) {
    const [ maxId, setMaxId ] = useState(4);

    const tags = props.tags;
    const [ tasks, setTasks ] = useState([
        { title: 'Drink tea', id: 1, tag: tags[ 0 ], complete: false },
        { title: 'Walking with Erni', id: 2, tag: tags[ 1 ], complete: false },
        { title: 'Make React app', id: 3, tag: tags[ 3 ], complete: false },
    ]);

    const deleteTask = (id) => {
        const newArray = tasks.filter((el) => el.id !== id);
        setTasks(newArray);
    /* console.log(idx)

        const before = tasks.slice(0,idx)
        const after = tasks.slice(idx + 1)

        const newArray = [...before, ...after]
        return setTasks(newArray) */
    };

    const createTask = (input, choiceTagId) => {
        const tag = tags.find((el) => el.id === choiceTagId);
        const newTask = {
            title:    input,
            id:       maxId,
            tag,
            complete: false,
        };
        setMaxId(maxId + 1);
        const newArr = [ ...tasks, newTask ];

        return setTasks(newArr);
    };

    return (
        <div className = 'wrap-contents'>
            <ContentClickOnHome
                createTask = { createTask }
                deleteTask = { deleteTask }
                tags = { tags }
                tasks = { tasks }
            />
        </div>
    );
}
