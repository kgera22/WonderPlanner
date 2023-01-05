import React, { useState } from 'react';
import '../Main.css';
import Task from './home/Task';

export default function ContentClickOnHome({ tags, tasks, deleteTask, createTask }) {
    const [ choiceTagId, setChoiceTagId ] = useState(null);

    const maxId = 100;
    const tagsItems = tags.map(({ tagsName, backgroundColor, id }) => {
        return (
            <div
                className = 'import-tags'
                key = { id }
                style = {{ backgroundColor }}
                onClick = { () => setChoiceTagId(id) }
            >
                {tagsName}
            </div>
        );
    });
    const [ visible, setVisible ] = useState(false);

    const [ input, setInput ] = useState('');
    const onChangeInput = (e) => {
        setInput(e.target.value);
    };

    const popup = (
        <div className = 'bg-popup-add-task' onClick = { () => setVisible(false) }>
            <div className = 'popup-add-task' onClick = { (event) => event.stopPropagation() }>
                <input placeholder = 'Write something' type = 'text' value = { input } onChange = { onChangeInput } />
                <div className = 'block-tags'>{tagsItems}</div>
                <button className = 'create-task' onClick = { () => createTask(input, choiceTagId) }>
                    Create task
                </button>
            </div>
        </div>
    );

    const [ windowActive, setWindowActive ] = useState(false);
    const textBtn = <div className = ''>+ Add list</div>;
    const createList = (
        <div>
            <input placeholder = 'Enter the name of the list' type = 'text' />
        </div>
    );

    return (
        <div className = 'wrap-todo-lists'>
            <h2>TodoList</h2>
            <div className = 'todo-lists'>
                <div className = 'stock-list'>
                    <h3>Today</h3>
                    <div className = 'tasks'>
                        {tasks.map((task) => {
                            return (
                                <Task
                                    deleteTask = { () => deleteTask(task.id) }
                                    key = { task.id }
                                    tag = { task.tag }
                                    title = { task.title }
                                />
                            );
                        })}
                    </div>
                    <button className = 'btn-add-task' onClick = { () => setVisible(true) }>
                        + Add task
                    </button>
                </div>
                <div className = 'btn-add-list' onClick = { () => setWindowActive(true) }>
                    {windowActive ? createList : textBtn}
                </div>
                <div className = 'create-list' />
            </div>
            {visible ? popup : null}
        </div>
    );
}
