import { Children } from "react"
import "./Slideup.css"

export default function Slideup ({onClose = () => {}, shown = false, children = []}) {
    return (
        <div className={!shown ? "slideup" : "slideup open"}>
            <img className="expand" src="wide-arrow.svg" onClick={onClose}></img>
            {children}
        </div>  
    )
}