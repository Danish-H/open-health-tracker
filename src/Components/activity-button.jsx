import './activity-button.css'

export default function Activity ({name, icon}) {
    return (
        <div className="activity-button">
            <img src={icon}></img>
            <span>{name}</span>
        </div>
    )
}