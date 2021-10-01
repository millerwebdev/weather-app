import { Link } from 'react-router-dom';
import GlobalNav from "./subcomponents/GlobalNav";
import {FaSun} from 'react-icons/fa';
const Header = ( {updateDownloads, setActiveNavItem} ) => {
    return (
        <header>
            <div className="wrapper">
                <h1><Link to="/"> <span><FaSun /></span> AmplyCast</Link></h1>
                <GlobalNav containerClass="header-nav" updateDownloads={updateDownloads} setActiveNavItem={setActiveNavItem} />
            </div>
        </header>
    );
}

export default Header;