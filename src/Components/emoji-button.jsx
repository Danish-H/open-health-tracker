import { Component } from "react";
import './emoji-button.css'

export default class EmojiButton extends Component {
    render() {
        return (
            <div className="emoji-button">
                <span style={{backgroundImage: "url("+this.props.src+")"}}></span>
            </div>
        )
    }
}