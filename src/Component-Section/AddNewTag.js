import React, { useState } from 'react';
import './Section-menu.css';
import { TwitterPicker } from 'react-color';

export default function AddNewTag(props) {
    const [ color, setColor ] = useState('#fff');

    function handleChangeComplete(color) {
        setColor(color.hex);
    }

    const [ input, setInput ] = useState('');
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className = 'popup_add_tag'>
            <div className = 'input_close'>
                <div className = 'wrap'>
                    <input type = 'text' value = { input } onChange = { onInputChange } />
                </div>
                <div className = 'block_cancel' onClick = { props.closePopUp }>
                    <img
                        alt = '#'
                        className = 'cancel'
                        src = 'https://cdn-icons-png.flaticon.com/512/399/399274.png'
                    />
                </div>
            </div>
            <div className = 'block_color'>
                <TwitterPicker color = { color } onChangeComplete = { handleChangeComplete } />
                <div className = 'view_tag' style = {{ backgroundColor: color }}>
                    {input}
                </div>
            </div>
            <button onClick = { () => props.handleCreateTag({ tagsName: input, backgroundColor: color }) }>
                Add tag
            </button>
        </div>
    );
}
