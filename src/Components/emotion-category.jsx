import EmotionButton from './emotion-button'
import './emotion-category.css'

export default function EmotionCategory({name = "", emotions = []}) {
    return (
        <div className="emotion-category">
            <h3>{name}</h3>
            <div>
                {emotions.map(x => {
                    return <EmotionButton name={x.name} icon={"https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/" + x.icon + ".svg"}></EmotionButton>
                })}
            </div>
        </div>
    )
}