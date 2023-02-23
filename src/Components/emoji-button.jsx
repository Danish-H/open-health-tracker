import { Component } from "react";
import './emoji-button.css'

export default function EmojiButton (props) {
            return (
            <div className="emoji-button" onClick={props.onClick}>
                <span style={{backgroundImage: "url("+props.src+")"}}></span>
            </div>
        )
    }