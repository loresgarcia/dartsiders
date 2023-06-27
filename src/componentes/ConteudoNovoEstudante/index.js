import { useState } from "react";

import { redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

import CampoFormulario from "../CampoFormulario";
import AvisoCadastro from "../AvisoCadastro";

import "./ConteudoNovoEstudante.css";

const ConteudoNovoEstudante = () => {
    const [exibirAviso, setExibirAviso] = useState(false);

    const dataAtual = new Date()
    
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataAtual.getFullYear()

    const dataFormatada = `${ano}-${mes}-${dia}`

    const matricula = uuidv4().split("-").pop().toUpperCase()

    const [novoEstudante, setNovoEstudante] = useState({
        id: uuidv4(),
        foto: "",
        nome: "",
        telefone: "",
        email: "",
        matricula: matricula,
        admissao: dataFormatada,
    })

    const botaoDesativado = !novoEstudante.foto || !novoEstudante.nome 
        ? true : !novoEstudante.telefone || !novoEstudante.email
        ? true : false

    const enviarNovoEstudante = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/dados", novoEstudante)
            .then(resposta => console.log(resposta.data))

        setExibirAviso(true);
    }

    const fecharAviso = () => {
        setExibirAviso(false);
        
        return redirect("/estudantes")
    };

    return (
        <div className="novo-estudante">
            <h3 className="novo-estudante__titulo">Novo estudante</h3>
            <form className="novo-estudante__formulario">
                <CampoFormulario 
                    novoEstudante={novoEstudante} 
                    setNovoEstudante={setNovoEstudante} 
                    chave="foto" 
                    valor={novoEstudante.foto} 
                    titulo="Foto" 
                    tipo="text" 
                />
                <CampoFormulario 
                    novoEstudante={novoEstudante} 
                    setNovoEstudante={setNovoEstudante} 
                    chave="nome" 
                    valor={novoEstudante.nome} 
                    titulo="Nome" 
                    tipo="text" 
                    placeholder="Nome completo" 
                />
                <CampoFormulario 
                    novoEstudante={novoEstudante} 
                    setNovoEstudante={setNovoEstudante} 
                    chave="telefone" 
                    valor={novoEstudante.telefone} 
                    titulo="Telefone" 
                    tipo="tel" 
                    placeholder="Telefone" 
                />
                <CampoFormulario 
                    novoEstudante={novoEstudante} 
                    setNovoEstudante={setNovoEstudante} 
                    chave="email" 
                    valor={novoEstudante.email} 
                    titulo="E-mail" 
                    tipo="email" 
                    placeholder="E-mail" 
                />
                <CampoFormulario 
                    novoEstudante={novoEstudante} 
                    setNovoEstudante={setNovoEstudante} 
                    chave="matricula" 
                    valor={novoEstudante.matricula} 
                    titulo="Matrícula" 
                    tipo="text" 
                    placeholder="Matrícula" 
                    readOnly={true}
                />
                <CampoFormulario 
                    novoEstudante={novoEstudante} 
                    setNovoEstudante={setNovoEstudante} 
                    chave="admissao" 
                    valor={novoEstudante.admissao} 
                    titulo="Admissão" 
                    tipo="date" 
                />
                <button 
                    className="novo-estudante__botao" 
                    onClick={(e) => enviarNovoEstudante(e)} 
                    disabled={botaoDesativado === true}
                >
                    Adicionar estudante
                </button>
            </form>
            {exibirAviso && (
                <AvisoCadastro exibirAviso={exibirAviso} fecharAviso={fecharAviso} />
            )}
        </div>
    )
}

export default ConteudoNovoEstudante;
