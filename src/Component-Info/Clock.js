import React, { useState } from 'react';

export default function Clock() {
    const [ date, setDate ] = useState(new Date());

    const timeId = setInterval(tick(), 1000);

    function tick() {
        setDate(new Date());
    }

    function unrender() {
        clearInterval(timeId);
    }

    return <div onChange = { unrender }>{date.toLocaleTimeString()}</div>;
}
