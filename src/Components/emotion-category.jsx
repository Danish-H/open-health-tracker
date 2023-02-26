import EmotionButton from './emotion-button'
import './emotion-category.css'
import React, { useState } from 'react';

function toggleSelected(id, selected, setSelected, allowMultiple) {  // TODO: find a less jank way to pass in all this information, a context object or something
    if (selected.indexOf(id) > -1) {
        setSelected(selected.filter(x => x != id))
        return
    }
    if (allowMultiple) {
        setSelected([...selected, id])
        return
    }
    setSelected([id])
}

export default function EmotionCategory({name, emotions = [], id, allowMultiple = false}) {
    const [selected, setSelected] = useState([])
    return (
        <div id={id} className="emotion-category">
            <h3>{name}</h3>
            <div>
                {emotions.map(x => {
                    return <EmotionButton 
                    id={x.id} 
                    name={x.name} 
                    icon={"https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/" + x.icon + ".svg"} 
                    selected={selected.indexOf(x.id) > -1}
                    onClick={() => {toggleSelected(x.id, selected, setSelected, allowMultiple)}}/>
                })}
            </div>
        </div>
    )
}