import CampoFormulario from "../CampoFormulario";

import "./ConteudoNovoEstudante.css";

const ConteudoNovoEstudante = () => {
    return (
        <div className="novo-estudante">
            <h3 className="novo-estudante__titulo">Novo estudante</h3>
            <form className="novo-estudante__formulario">
                <CampoFormulario titulo="Foto" tipo="file" />
                <CampoFormulario titulo="Nome" tipo="text" placeholder="Nome completo" />
                <CampoFormulario titulo="Telefone" tipo="tel" placeholder="Telefone" />
                <CampoFormulario titulo="E-mail" tipo="email" placeholder="E-mail" />
                <CampoFormulario titulo="Matrícula" tipo="text" placeholder="Matrícula" />
                <CampoFormulario titulo="Admissão" tipo="date" />
                <button className="novo-estudante__botao">Adicionar estudante</button>
            </form>
        </div>
    )
}

export default ConteudoNovoEstudante;
