import React, { Component } from 'react';
import './card.css'

export default class Card extends Component {
    render() {
        return (
        <div style={{backgroundColor: this.props.color}} className="card">
            <h1>{this.props.title}</h1>
            {this.props.children}
        </div>
        )
    }
}