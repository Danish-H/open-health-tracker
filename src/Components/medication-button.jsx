import './medication-button.css'

export default function MedicationButton ({onClick = () => {}, name, time}) {
            return (
            <div className="medication-button" onClick={onClick}>
                <span>{name}</span>
                <span class="time">{time}</span>
                <a>TAKEN</a>
            </div>
        )
    }