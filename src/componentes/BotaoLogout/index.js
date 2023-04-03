import { RiLogoutBoxRLine } from "react-icons/ri";

import "./BotaoLogout.css";

const BotaoLogout = () => {
    return (
        <button className="botao-logout">
            <span>Logout</span>
            <RiLogoutBoxRLine />
        </button>
    )
}

export default BotaoLogout;
