import "./Slideup.css"

export default function Slideup ({onClose = () => {}, shown = false}) {
    return (
        <div className="slideup" style={{
            display: shown ? "block" : "none"
        }}>
            <span onClick={onClose} className="expand"></span>
            
        </div>  
    )
}