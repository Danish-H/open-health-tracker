import './header.css'
import { OidcUserStatus, useOidc } from '@axa-fr/react-oidc'
import React, { useState } from 'react';
b
export default function Header (props) {
    const [profileMenu, setProfileMenu] = useState(false);
    const { logout } = useOidc();

    return (
        <div id="header">
            <h1>Hello <span>{props.name}</span>!</h1>
            <img id="user" src={props.pfp} alt="user" onClick={() => {setProfileMenu(true)}} />
            <ul className={profileMenu? "open" : ""}>
                <div class="background" onClick={() => {setProfileMenu(false)}} ></div>
                <li onClick={() => {window.location = "https://sso.hbigroup.org/realms/openhealthtracker/account/"}} id="profile"><img src="profile.svg" alt="profile"/> Profile</li>
                {/* {oidcUserLoadingState === OidcUserStatus.Loaded && oidcUser} */}
                <li id="settings"><img src="settings.svg" alt="profile"/> Settings</li>
                <li id="signout" onClick={logout}><img src="signout.svg" alt="profile"/> Sign Out</li>
            </ul>
        </div>
    )
}