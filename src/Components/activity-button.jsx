import './activity-button.css'

export default function Activity ({name, icon}) {
    return (
        <div className="activity-button">
            <div><img src={icon}></img></div>
            <span>{name}</span>
        </div>
    )
}