import EmotionButton from './emotion-button'
import './emotion-category.css'

function toggleSelected(categoryId, id, journalState, updateJournalState, allowMultiple) {  // TODO: find a less jank way to pass in all this information, a context object or something
    var selected = journalState.emotions[categoryId] ?? []
    if (selected.indexOf(id) > -1) {
        selected = selected.filter(x => x !== id)
    }
    else if (allowMultiple) {
        selected = [...selected, id]
        
    }
    else {
        selected = [id]
    }
    updateJournalState({
        ...journalState,
        emotions: {
            ...journalState.emotions,
            [categoryId]: selected
        }
    })
}

export default function EmotionCategory({name, emotions = [], id, allowMultiple = false, journalState, updateJournalState}) {
    return (
        <div id={id} className="emotion-category">
            <h3>{name}</h3>
            <div>
                {emotions.map(x => {
                    return <EmotionButton 
                    id={x.id} 
                    name={x.name} 
                    icon={"https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/" + x.icon + ".svg"} 
                    selected={journalState.emotions[id] !== null && journalState.emotions[id].indexOf(x.id) > -1}
                    onClick={() => {toggleSelected(id, x.id, journalState, updateJournalState, allowMultiple)}}/>
                })}
            </div>
        </div>
    )
}