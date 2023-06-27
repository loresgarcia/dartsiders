import "./CampoFormulario.css";

const CampoFormulario = ({titulo, tipo, placeholder, valor, chave, novoEstudante, setNovoEstudante, readOnly}) => {
    const teste = (e) => {
        setNovoEstudante({
            ...novoEstudante,
            [chave]: e.target.value
        })
    }
    
    return (
        <label className="campo">
            {titulo}
            <input 
                className="campo__input" 
                type={tipo} 
                placeholder={placeholder} 
                value={valor} 
                onChange={(e) => teste(e)}
                readOnly={readOnly}
                style={readOnly === true ? {backgroundColor: "#EEEEEE", color: "#AAAAAA", cursor: "not-allowed"} : {backgroundColor: "#FFFFFF"}}
                required 
            />
        </label>
    )
}

export default CampoFormulario;
