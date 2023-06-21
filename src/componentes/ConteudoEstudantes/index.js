import { useEffect, useState } from "react";

import axios from "axios";

import { VscEdit } from "react-icons/vsc";
import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./ConteudoEstudantes.css";

const ConteudoEstudantes = () => {
    const [listaDeEstudantes, setListaDeEstudantes] = useState(null)
    // foto, nome, email, telefone, matricula, admissão
    // Lista de Estudantes
    useEffect(() => {
        axios.get("http://localhost:3000/dados")
        .then(resposta => setListaDeEstudantes(resposta.data))
    }, [])

    return (
        <div className="estudantes">
            <div className="estudantes__cabecalho">
                <h1 className="estudantes__titulo">Lista de Estudantes</h1>
                <Link to={"/novo-estudante"}>
                    <button className="estudantes__botao">Adicionar novo estudante</button>
                </Link>
            </div>
            <table className="estudantes__tabela">
                <tr className="tabela__cabecalho">
                    <th></th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Matrícula</th>
                    <th>Admissão</th>
                    <th></th>
                </tr>
                {listaDeEstudantes ? listaDeEstudantes.map((estudante, id) => (
                    <tr key={id} className="tabela__estudante">
                        <td className="tabela__primeira-celula">
                            <img className="tabela__foto" src={estudante.foto} alt={`Foto de ${estudante.nome}`} /> 
                        </td>
                        <td>{estudante.nome}</td>
                        <td>{estudante.email}</td>
                        <td>{estudante.telefone}</td>
                        <td>{estudante.matricula}</td>
                        <td>{estudante.admissao}</td>
                        <td className="tabela__ultima-celula">
                            <button><VscEdit size={ "20px" } style={{ color: "#A700D0" }} /></button>
                            <button><FiTrash size={ "20px" } style={{ color: "#A700D0" }} /></button>
                        </td>
                    </tr>
                )) : null}
                
            </table>
        </div>
    )
}

export default ConteudoEstudantes;
