import EmojiButton from './emoji-button';

export default function EmojiButtons(props) {
    return (
        <div>
            {
                props.emotions.forEach(emotion => {
                    <EmojiButton src={"https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f622.svg"}/>
                })
            }
        </div>
        ) 
}