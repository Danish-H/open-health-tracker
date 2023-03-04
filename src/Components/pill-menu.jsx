import "./pill-menu.css"

export default function PillMenu({primaryLabel = "Save", secondaryLabel = "Cancel", primaryColor = "#caead3", secondaryColor = "#252525", primaryTextColor = "#252525", secondaryTextColor = "#888888"}) {
    return (
        <div className="pill-menu" style={{backgroundColor: secondaryColor, color: secondaryTextColor}}>
            <span>{secondaryLabel}</span>
            <span className="primary" style={{backgroundColor: primaryColor, color: primaryTextColor}}>{primaryLabel}</span>
        </div>
    )
}