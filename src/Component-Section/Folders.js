import React from 'react';
import FolderItem from './FolderItem';
import './Section-menu.css';

export default function Folders(props) {
    return (
        <div className = 'wrapper-folders'>
            <div className = 'name_section'>Project folders </div>
            <div>
                {props.folders.map((folder) => {
                    return <FolderItem key = { folder.id } name = { folder.name } />;
                })}
            </div>
        </div>
    );
}
