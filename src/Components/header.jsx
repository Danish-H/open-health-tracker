import './header.css'
import { useOidc } from '@axa-fr/react-oidc'

export default function Header (props) {
    const { logout } = useOidc();
    return (
        <div id="header">
            <h1>Hello <span>{props.name}</span>!</h1>
            <img id="profile" src={props.pfp} alt="profile" onClick={logout}/>
        </div>
    )
}