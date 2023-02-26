import { Component } from "react";
import './emoji-button.css'

export default function EmojiButton ({onClick = () => {}, src=""}) {
            return (
            <div className="emoji-button" onClick={onClick}>
                <span style={{backgroundImage: "url("+src+")"}}></span>
            </div>
        )
    }