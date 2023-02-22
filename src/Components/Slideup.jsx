import "./Slideup.css"

export default function Slideup ({shown = false}) {
    return (
        <div className="slideup" style={{
            display: shown ? "block" : "none"
        }}>
            <span className="expand"></span>
            
        </div>  
    )
}