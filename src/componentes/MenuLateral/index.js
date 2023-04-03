import Logo from "../Logo";

const MenuLateral = () => {
    return (
        <section>
            <Logo />
            <img src="https://github.com/loresgarcia.png" alt="foto de perfil admin" />
            <p>Lorena Garcia</p>
            <span>Admin</span>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Curso</li>
                    <li>Estudantes</li>
                    <li>Pagamentos</li>
                    <li>Relatórios</li>
                    <li>Configurações</li>
                </ul>
            </nav>

            <button>Logout</button>
        </section>
    )
}

export default MenuLateral;
