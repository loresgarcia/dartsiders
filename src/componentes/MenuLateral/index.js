import BotaoLogout from "../BotaoLogout";
import Logo from "../Logo";
import MenuNavegacao from "../MenuNavegacao";
import PerfilUsuario from "../PerfilUsuario";

const MenuLateral = () => {
    return (
        <section>
            <Logo />
            <PerfilUsuario />
            <MenuNavegacao />
            <BotaoLogout />
        </section>
    )
}

export default MenuLateral;
