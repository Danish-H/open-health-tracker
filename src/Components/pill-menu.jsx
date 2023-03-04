import "./pill-menu.css"

export default function PillMenu({primaryLabel = "Save", secondaryLabel = "Cancel", primaryColor = "#caead3", secondaryColor = "#252525", primaryTextColor = "#252525", secondaryTextColor = "#888888", dropShadow = false, primaryClick, secondaryClick}) {
    return (
        <div className={dropShadow ? "pill-menu drop-shadow" : "pill-menu"} style={{backgroundColor: secondaryColor, color: secondaryTextColor}}>
            <span onClick={secondaryClick}>{secondaryLabel}</span>
            <span onClick={primaryClick} className="primary" style={{backgroundColor: primaryColor, color: primaryTextColor}}>{primaryLabel}</span>
        </div>
    )
}