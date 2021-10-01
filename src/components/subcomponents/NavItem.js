import { Link } from 'react-router-dom';
const NavItem = ({href, name, itemClass, setActiveNavItem}) => {
    return (
        <li onClick={setActiveNavItem}>
            <Link className={itemClass} to={href}>{name}</Link>
        </li>
    )
}

export default NavItem
