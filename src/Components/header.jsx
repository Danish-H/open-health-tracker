import './header.css'
import { useOidc } from '@axa-fr/react-oidc'
import React, { useState } from 'react';

export default function Header (props) {
    const [profileMenu, setProfileMenu] = useState(false);
    const { logout } = useOidc();
    return (
        <div id="header">
            <h1>Hello <span>{props.name}</span>!</h1>
            <img id="user" src={props.pfp} alt="user" onClick={() => {setProfileMenu(true)}} />
            <ul className={profileMenu? "open" : ""}>
                <div class="background" onClick={() => {setProfileMenu(false)}} ></div>
                <li id="profile"><img src="profile.svg" alt="profile"/> Profile</li>
                <li id="settings"><img src="settings.svg" alt="profile"/> Settings</li>
                <li id="signout" onClick={logout}><img src="signout.svg" alt="profile"/> Sign Out</li>
            </ul>
        </div>
    )
}