import { RiLogoutBoxRLine } from "react-icons/ri";

import "./BotaoLogout.css";
import { Link } from "react-router-dom";

const BotaoLogout = () => {
    return (
        <button className="botao-logout">
            <Link to={"/login"}>
                <span>Logout</span>
                <RiLogoutBoxRLine />
            </Link>
        </button>
    )
}

export default BotaoLogout;
