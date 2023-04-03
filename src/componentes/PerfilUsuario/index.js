import "./PerfilUsuario.css";

const PerfilUsuario = () => {
    return (
        <div className="usuario">
            <img src="https://github.com/loresgarcia.png" alt="foto de perfil admin" className="usuario-imagem"/>
            <p className="usuario-nome">Lorena Garcia</p>
            <span className="usuario-cargo">Admin</span>
        </div>
    )
}

export default PerfilUsuario;
