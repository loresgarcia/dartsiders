import BotaoLogin from "../BotaoLogin";
import InputLogin from "../InputLogin";
import Logo from "../Logo";

import "./CartaoLogin.css";

const CartaoLogin = () => {
    return (
        <div className="cartao-login">
            <Logo tamanho="maior" />
            <h2 className="cartao-login__titulo">LOGIN</h2>
            <p className="cartao-login__subtitulo">Insira suas credenciais para acessar sua conta:</p>
            <InputLogin titulo="Email" tipo="email" placeholder="Digite seu email" />
            <InputLogin titulo="Senha" tipo="password" placeholder="Digite sua senha" />
            <BotaoLogin />
            <span className="cartao-login__reset">Esqueci minha senha</span>
        </div>
    )
}

export default CartaoLogin;
