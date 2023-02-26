import "./emotion-button.css"

export default function EmotionButton({name, icon, selected = false, id, onClick = () => {}}) {
    return (
        <div onClick={onClick} className={!selected ? "emotion-button" : "emotion-button selected"}>
            <img alt={name} src={icon}></img>
            <span>{name}</span>
        </div>)
}