import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./BotaoLogout.css";

const BotaoLogout = () => {
    return (
        <button className="botao-logout">
            <Link to={"/login"} style={{textDecoration: "none"}}>
                <span style={{color: "#222222"}}>Logout</span>
                <RiLogoutBoxRLine color="#222222" />
            </Link>
        </button>
    )
}

export default BotaoLogout;
