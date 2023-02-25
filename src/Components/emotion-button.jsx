import "./emotion-button.css"

export default function EmotionButton(props) {
    return (
        <div className="emotion-button">
            <img src={props.icon}></img>
            <p>{props.name}</p>
        </div>)
}