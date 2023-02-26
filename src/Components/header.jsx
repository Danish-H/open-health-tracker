import './header.css'
import { useOidc } from '@axa-fr/react-oidc'

export default function Header (props) {
    const { logout } = useOidc();
    return (
        <div id="header">
            <h1>Hello <span>{props.name}</span>!</h1>
            <img id="user" src={props.pfp} alt="user" /* add onclick event here that adds .open to <ul> */ />
            <ul class="open">
                <div class="background" /* add onclick event here that removes .open from <ul> */ ></div>
                <li id="profile"><img src="profile.svg" alt="profile"/> Profile</li>
                <li id="settings"><img src="settings.svg" alt="profile"/> Settings</li>
                <li id="signout" onClick={logout}><img src="signout.svg" alt="profile"/> Sign Out</li>
            </ul>
        </div>
    )
}