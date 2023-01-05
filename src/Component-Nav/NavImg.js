import React from 'react';
import PointNav from './PointNav';
import './PointNav.css';

export default function NavImg() {
    const imgs = [
        { img: 'https://cdn-icons-png.flaticon.com/512/610/610363.png', name: '', id: 1 },
        { img: 'https://img.icons8.com/ios/344/home--v1.png', name: 'home', id: 2 },
        { img:  'https://img.icons8.com/pastel-glyph/344/presentation-screen--v1.png', name: 'board',id: 3},
        { img: 'https://img.icons8.com/ios/344/conference-call--v1.png', name: 'chat', id: 4 },
        { img: 'https://img.icons8.com/ios/344/settings--v1.png', name: 'settings', id: 5 },
        { img: 'https://img.icons8.com/pastel-glyph/344/person-male--v2.png', name: 'avatar', id: 6 },
    ];

    return imgs.map(({ img, name, id }) => <PointNav img = { img } key = { id } name = { name } />);
}
