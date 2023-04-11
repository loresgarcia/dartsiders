import "./InputLogin.css"

const InputLogin = ({titulo, tipo, placeholder}) => {
    return (
        <label className="input-login">
            {titulo}
            <input type={tipo} placeholder={placeholder} />
        </label>
    )
}

export default InputLogin;
