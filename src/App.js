import React, { useState, useEffect } from 'react';
import NavImg from './Component-Nav/NavImg';
import Heading1 from './Component-Section/Heading1';
import Folders from './Component-Section/Folders';
import TagsPanel from './Component-Section/TagsPanel';
import MainContent from './Component-Main/MainContent';
import './index.css';
import Clock from './Component-Info/Clock';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Block from './Component-Info/Block';

const folders = [
    { name: 'Key Projects', id: 1 },
    { name: 'Other Projects', id: 2 },
];

const App = () => {
    function handleCreateTag(tag) {
        setColorTags([ ...colorTags, tag ]);
    }
    const [ colorTags, setColorTags ] = useState([
        { tagsName: 'Today', backgroundColor: '#3498db', id: 1 },
        { tagsName: 'To Do', backgroundColor: '#2ecc71', id: 2 },
        { tagsName: 'To Go', backgroundColor: '#34495e', id: 3 },
        { tagsName: 'Note', backgroundColor: '#9b59b6', id: 4 },
        { tagsName: 'Urgently', backgroundColor: '#e74c3c', id: 5 },
        { tagsName: 'Important', backgroundColor: '#f1c40f', id: 6 },
    ]);

    const [ date, setDate ] = useState(new Date());

    return (
        <div className = 'wrapper'>
            <div className = 'navbar'>
                <NavImg />
            </div>
            <div className = 'section-menu'>
                <Heading1 />
                <Folders folders = { folders } />
                <TagsPanel colors = { colorTags } handleCreateTag = { handleCreateTag } />
            </div>
            <div className = 'main-content'>
                <MainContent tags = { colorTags } />
            </div>
            <div className = 'info'>
                <Calendar className = 'calendar' value = { date } onChange = { setDate } />
                <Block />
            </div>
        </div>
    );
};

export default App;
