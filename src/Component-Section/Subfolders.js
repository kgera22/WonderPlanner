import React, { useState } from 'react';
import ItemSubfolders from './ItemSubfolders';
import './Section-menu.css';

export default function Subfolders() {
    const [ itemFolders, setTasks ] = useState([{ title: 'First folder' }]);
    const [ input, setInput ] = useState('');

    const onAddFolder = () => {
        setTasks([ ...itemFolders, { title: input }]);
        setInput('');
    };
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    return (
        <div>
            <div className = 'folder_subfolders'>
                <ul>
                    {itemFolders.map((itemFolder) => {
                        return (
                            <li>
                                <ItemSubfolders title = { itemFolder.title } />
                            </li>
                        );
                    })}
                </ul>
                <div>
                    <input value = { input } onChange = { onInputChange } />
                    <button onClick = { onAddFolder }>Add folder</button>
                </div>
            </div>
        </div>
    );
}
