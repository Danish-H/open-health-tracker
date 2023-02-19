import React, { Component } from 'react';
import './card.css'

export default class Card extends Component {
    render() {
        return (
        <div className="card">
            {!this.props.showbg && (
                <div className="cardbg" style={{backgroundColor: this.props.bgcolor}}></div>
            )}
            {this.props.showbg && (
                <div>
                    <div className="cardbg" style={{backgroundColor: this.props.bgcolor, transform: "rotate(1.73deg)"}}></div>
                    <div className="cardbg" style={{backgroundColor: this.props.bgcolor, transform: "rotate(-1.73deg)"}}></div>
                </div>
            )}
            <h1>{this.props.title}</h1>
            {this.props.children}
            <span className="expand"></span>
        </div>
        )
    }
}
