import "./CampoFormulario.css";

const CampoFormulario = ({titulo, tipo, placeholder}) => {
    return (
        <label className="campo">
            {titulo}
            <input className="campo__input" type={tipo} placeholder={placeholder} />
        </label>
    )
}

export default CampoFormulario;
