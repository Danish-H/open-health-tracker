import React, { Component } from 'react';
import './card.css'

export default class Card extends Component {
    render() {
        return (
        <div className="card">
            <div className="cardbg" style={{backgroundColor: this.props.bgcolor, transform: "rotate(1.73deg)"}}></div>
            <div className="cardbg" style={{backgroundColor: this.props.bgcolor, transform: "rotate(-1.73deg)"}}></div>
            <h1>{this.props.title}</h1>
            {this.props.children}
            <a className="expand"></a>
        </div>
        )
    }
}
