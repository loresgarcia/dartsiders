import { useState } from "react";

// import axios from "axios";

import CampoFormulario from "../CampoFormulario";

import "./ConteudoNovoEstudante.css";

const ConteudoNovoEstudante = () => {
    const dataAtual = new Date()
    
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataAtual.getFullYear()

    const dataFormatada = `${ano}-${mes}-${dia}`

    const [novoEstudante, setNovoEstudante] = useState({
        foto: "",
        nome: "",
        telefone: "",
        email: "",
        matricula: "",
        admissao: dataFormatada,
    })

    const enviarNovoEstudante = () => {
        // axios.post("http://localhost:3000/dados",)
        console.log(novoEstudante)
    }

    return (
        <div className="novo-estudante">
            <h3 className="novo-estudante__titulo">Novo estudante</h3>
            <form className="novo-estudante__formulario">
                <CampoFormulario novoEstudante={novoEstudante} setNovoEstudante={setNovoEstudante} chave="foto" valor={novoEstudante.foto} titulo="Foto" tipo="text" />
                <CampoFormulario novoEstudante={novoEstudante} setNovoEstudante={setNovoEstudante} chave="nome" valor={novoEstudante.nome} titulo="Nome" tipo="text" placeholder="Nome completo" />
                <CampoFormulario novoEstudante={novoEstudante} setNovoEstudante={setNovoEstudante} chave="telefone" valor={novoEstudante.telefone} titulo="Telefone" tipo="tel" placeholder="Telefone" />
                <CampoFormulario novoEstudante={novoEstudante} setNovoEstudante={setNovoEstudante} chave="email" valor={novoEstudante.email} titulo="E-mail" tipo="email" placeholder="E-mail" />
                <CampoFormulario novoEstudante={novoEstudante} setNovoEstudante={setNovoEstudante} chave="matricula" valor={novoEstudante.matricula} titulo="Matrícula" tipo="text" placeholder="Matrícula" />
                <CampoFormulario novoEstudante={novoEstudante} setNovoEstudante={setNovoEstudante} chave="admissao" valor={novoEstudante.admissao} titulo="Admissão" tipo="date" />
                <button className="novo-estudante__botao" onClick={() => enviarNovoEstudante()}>Adicionar estudante</button>
            </form>
        </div>
    )
}

export default ConteudoNovoEstudante;
