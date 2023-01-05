import React, { useState } from 'react';
import AddNewTag from './AddNewTag';
import './Section-menu.css';
import Tag from './Tag';

export default function TagsPanel(props) {
    const [ addNewTag, setAddNewTag ] = useState(false);

    function closePopUp() {
        setAddNewTag(false);
    }

    return (
        <div className = 'wrapper_tags_panel'>
            <div className = 'heading_tags'>Tags Panel</div>
            <div className = 'tags_panel'>
                {props.colors.map((tag) => {
                    return <Tag backgroundColor = { tag.backgroundColor } key = { tag.id } name = { tag.tagsName } />;
                })}

                <button onClick = { () => setAddNewTag(!addNewTag) }>New Tag</button>
            </div>
            {addNewTag && <AddNewTag closePopUp = { closePopUp } handleCreateTag = { props.handleCreateTag } />}
        </div>
    );
}
