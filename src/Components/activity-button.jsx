import './activity-button.css'

export default function Activity ({name, icon, onclick, selected = false}) {
    return (
        <div onClick={onclick} className={!selected ? "activity-button" : "activity-button selected"}>
            <div><img src={icon}></img></div>
            <span>{name}</span>
        </div>
    )
}