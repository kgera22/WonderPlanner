import React, { useState } from 'react';
import './Section-menu.css';
import Subfolders from './Subfolders';

export default function FolderItem(props) {
    const [ activeSubfolders, setActiveSubfolders ] = useState(false);

    return (
        <div className = 'wrapper_menu_folders'>
            <div className = 'folder'>
                <div className = 'folder_section_img'>
                    <img alt = 'folder' src = 'https://cdn-icons-png.flaticon.com/512/992/992667.png' />
                    {props.name}
                </div>
                <div className = 'arrow' onClick = { () => setActiveSubfolders(!activeSubfolders) }>
                    <img src = 'https://cdn2.iconfinder.com/data/icons/lightly-icons/30/chevron-down-480.png' />
                </div>
            </div>
            {activeSubfolders && <Subfolders />}
        </div>
    );
}
