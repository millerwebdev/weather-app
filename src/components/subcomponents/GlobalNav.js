import NavItem from "./NavItem";
const Navigation = ( {containerClass, updateDownloads, setActiveNavItem} ) => {
    return (
        <nav className={containerClass}>
            <span className="menu-toggle">MENU</span>
            <ul>
                <NavItem href="/" name="Overview" itemClass="active" setActiveNavItem={setActiveNavItem} />
                <NavItem href="/demo" name="Demo" setActiveNavItem={setActiveNavItem} />
                <span className="download" onClick={updateDownloads}>Download</span>
            </ul>
        </nav>
    )
}

export default Navigation
