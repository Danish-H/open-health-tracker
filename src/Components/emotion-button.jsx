import "./emotion-button.css"

export default function EmotionButton({name = "", icon = "", selected = false}) {
    return (
        <div className={!selected ? "emotion-button" : "emotion-button selected"}>
            <img src={icon}></img>
            <span>{name}</span>
        </div>)
}