import { Children } from "react"
import "./Slideup.css"

export default function Slideup ({onClose = () => {}, shown = false, children = []}) {
    return (
        <div className={!shown ? "slideup" : "slideup open"}>
            <span onClick={onClose} className="expand"></span>
            {children}
        </div>  
    )
}