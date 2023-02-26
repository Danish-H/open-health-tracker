import './card.css'

export default function Card(props) {
    return (
    <div className="card">
        {!props.showbg && ( // Show a single unrotated card if cardbg is false or undefined
            <div className="cardbg" style={{backgroundColor: props.bgcolor}}></div>
        )}
        {props.showbg && ( // Show 2 cards with rotation if cardbg is true
            <div>
                <div className="cardbg" style={{backgroundColor: props.bgcolor, transform: "rotate(1.73deg)"}}></div>
                <div className="cardbg" style={{backgroundColor: props.bgcolor, transform: "rotate(-1.73deg)"}}></div>
            </div>
        )}
        <h1>{props.title}</h1>
        {props.children}
        <img className="expand" src="wide-arrow.svg" onClick={props.onClick}></img> {/* note: this onClick has to be different from the other because it doesnt select a mood as well */}
    </div>
    )
}
