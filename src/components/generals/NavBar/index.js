import { Link } from "react-router-dom";
import { NavBarAnchorCSS, NavBarContainerCSS } from "./styles";

function NavBar({ itemsList }) {
    return (
        <nav>
            <ul className={NavBarContainerCSS()}>
                {itemsList.map((item) => (
                    <Link key={item.id} className={NavBarAnchorCSS()} to={item.href}>
                        <li> {item.name} </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;