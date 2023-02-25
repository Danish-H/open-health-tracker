import './emotion-category.css'

export default function EmotionCategory({name = "", emotions = []}) {
    return (
        <div className="emotion-category">
            <h3>{name}</h3>
        </div>
    )
}