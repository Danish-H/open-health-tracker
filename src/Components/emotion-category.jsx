import EmotionButton from './emotion-button'
import './emotion-category.css'
import React, { useState } from 'react';

function toggleSelected(id, selected, setSelected, allowMultiple) {  // TODO: find a less jank way to pass in all this information, a context object or something
    if (id in selected) {
        setSelected(selected.splice(selected.indexOf(id), 1))
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
        <div className="emotion-category">
            <h3>{name}</h3>
            <div>
                {emotions.map(x => {
                    return <EmotionButton 
                    id={x.id} 
                    name={x.name} 
                    icon={"https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/" + x.icon + ".svg"} 
                    selected={x.id in selected}
                    onClick={() => {toggleSelected(id, selected, setSelected, allowMultiple)}}/>
                })}
            </div>
        </div>
    )
}