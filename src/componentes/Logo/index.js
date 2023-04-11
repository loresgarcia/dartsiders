const Logo = ({tamanho = "menor"}) => {
    return (
        <img src={`imagens/logo-${tamanho}.png`} alt="logo da dartsiders" />
    )
}

export default Logo;
