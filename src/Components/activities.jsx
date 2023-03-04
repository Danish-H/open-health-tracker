import Activity from "./activity-button"
import "./activities.css"

function toggleSelected(id, journalState, updateJournalState) {
    if (journalState.activities.indexOf(id) > -1) {
        updateJournalState({
            ...journalState,
            "activities": journalState.activities.filter(x => x.id != id)
        })
    } else {
        updateJournalState({
            ...journalState,
            "activities": [...journalState.activities, id]
        })
    }
    console.log(journalState)
}

export default function Activities({activities = [], journalState, updateJournalState}) {
    return (
        <div className="activities">
            {activities.map(x => {
                return <Activity name={x.name} icon={x.icon} onclick={() => {toggleSelected(x.id, journalState, updateJournalState)}}/>
            })}
        </div>
    )
}