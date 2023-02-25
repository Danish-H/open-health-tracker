import "./Slideup.css"

export default function Slideup ({onClose = () => {}, shown = false}) {
    return (
        <div className={!shown ? "slideup" : "slideup open"}>
            <span onClick={onClose  } className="expand"></span>
            
        </div>  
    )
}