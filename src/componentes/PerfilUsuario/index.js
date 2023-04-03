import "./PerfilUsuario.css";

const PerfilUsuario = () => {
    return (
        <div className="usuario">
            <img className="usuario__imagem" src="https://github.com/loresgarcia.png" alt="foto de perfil admin" />
            <p className="usuario__nome">Lorena Garcia</p>
            <span className="usuario__cargo">Admin</span>
        </div>
    )
}

export default PerfilUsuario;
