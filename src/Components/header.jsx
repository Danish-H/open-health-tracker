import './header.css'
import { useOidc } from '@axa-fr/react-oidc'

export default function Header (props) {
    const { logout } = useOidc();
    return (
        <div id="header">
            <h1>Hello <span>{props.name}</span>!</h1>
            <img id="user" src={props.pfp} alt="user" /* add onclick event here which adds .open to <div class="entire-background"></div> AND <ul>...</ul> */ />
            <div class="background"></div> {/* clicking this div should remove .open from both this div and ul */}
            <ul class="open">
                <li id="profile"><img src="profile.svg" alt="profile"/> Profile</li>
                <li id="settings"><img src="settings.svg" alt="profile"/> Settings</li>
                <li id="signout" onClick={logout}><img src="signout.svg" alt="profile"/> Sign Out</li>
            </ul>
        </div>
    )
}