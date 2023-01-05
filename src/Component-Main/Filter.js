import React, { useState } from 'react';
import './Main.css';

export default function Filter(props) {
    const tags = props.tags;

    const [ state, setState ] = useState({
        statusVisible:   false,
        priorityVisible: false,
        sortVisible:     false,
    });

    const btnFilter = [
        {
            id:    1,
            name:  'status',
            label: 'Status',
            img:   'https://cdn2.iconfinder.com/data/icons/lightly-icons/30/chevron-down-480.png',
            stat:  [
                { tagsName: 'Current', color: 'gray' },
                { tagsName: 'Tommorow', color: 'gray' },
                { tagsName: 'Complited', color: 'gray' },
            ],
        },
        {
            id:    2,
            name:  'priority',
            label: 'Priority all',
            img:   'https://cdn2.iconfinder.com/data/icons/lightly-icons/30/chevron-down-480.png',
            stat:  [
                { tagsName: 'Strong' },
                { tagsName: 'Frog' },
                { tagsName: 'Lazy' },
                { tagsName: 'None' },
            ],
        },
        {
            id:    3,
            name:  'sort',
            label: 'Sort by Tags',
            img:   'https://cdn2.iconfinder.com/data/icons/lightly-icons/30/chevron-down-480.png',
            stat:  tags,
        },
    ];

    const filters = btnFilter.map(({ name, label, img, stat, id }) => {
        return (
            <div className = 'wrap-block' key = { id }>
                <button
                    className = { name }
                    onClick = { () => setState({ ...state, [ `${name}Visible` ]: !state[ `${name}Visible` ] }) }
                >
                    {label}
                    <img src = { img } />
                </button>
                {state[ `${name}Visible` ] && (
                    <div className = 'wrap-ul'>
                        {stat.map((tag) => {
                            return (
                                <div style = {{ backgroundColor: tag.backgroundColor, color: '#fff' }}>
                                    {tag.tagsName}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    });

    return (
        <div className = 'wrapper-filter'>
            <input placeholder = 'Search task' type = 'text' />
            <div className = 'btn-filter'>{filters}</div>
        </div>
    );
}
