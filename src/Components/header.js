import { Component } from 'react'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <h1><span class="gray">Hello</span> {this.props.name}!</h1>
                <img id="profile" src={this.props.pfp} alt="profile"/>
            </div>
        )
    }
}