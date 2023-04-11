import BotaoLogout from "../BotaoLogout";
import Logo from "../Logo";
import MenuNavegacao from "../MenuNavegacao";
import PerfilUsuario from "../PerfilUsuario";
import "./MenuLateral.css";

const MenuLateral = () => {
    return (
        <section className="menu-lateral">
            <Logo tamanho="menor" />
            <PerfilUsuario />
            <MenuNavegacao />
            <BotaoLogout />
        </section>
    )
}

export default MenuLateral;
