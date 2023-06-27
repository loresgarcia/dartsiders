import { useEffect, useState } from "react";

import axios from "axios";

import { VscEdit } from "react-icons/vsc";
import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";


import "./ConteudoEstudantes.css";

import formatarTelefone from "./funcoes/formatarTelefone";
import formatarData from "./funcoes/formatarData";

const ConteudoEstudantes = () => {
    const [listaDeEstudantes, setListaDeEstudantes] = useState(null);

    const excluirEstudante = (id) => {
        axios
            .delete(`http://localhost:3000/dados/${id}`)
            .then((resposta) => {
                // Atualizando a lista de estudantes após a exclusão bem-sucedida
                setListaDeEstudantes((prevLista) =>
                    prevLista.filter((estudante) => estudante.id !== id)
                );
            })
            .catch((erro) => {
                // Lide com erros, se necessário
            });
    };

    useEffect(() => {
        axios
            .get("http://localhost:3000/dados")
            .then((resposta) => setListaDeEstudantes(resposta.data));
    }, []);

    return (
        <div className="estudantes">
            <div className="estudantes__cabecalho">
                <h1 className="estudantes__titulo">Lista de Estudantes</h1>
                <Link to={"/novo-estudante"}>
                    <button className="estudantes__botao">
                        Adicionar novo estudante
                    </button>
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
                {listaDeEstudantes
                    ? listaDeEstudantes.map((estudante, id) => (
                        <tr key={id} className="tabela__estudante">
                            <td className="tabela__primeira-celula">
                                <img
                                    className="tabela__foto"
                                    src={estudante.foto}
                                    alt={`Foto de ${estudante.nome}`}
                                />
                            </td>
                            <td>{estudante.nome}</td>
                            <td>{estudante.email}</td>
                            <td>{formatarTelefone(estudante.telefone)}</td>
                            <td>{estudante.matricula}</td>
                            <td>{formatarData(estudante.admissao)}</td>
                            <td className="tabela__ultima-celula">
                                <button>
                                    <VscEdit size={"20px"} style={{ color: "#A700D0" }} />
                                </button>
                                <button onClick={() => excluirEstudante(estudante.id)}>
                                    <FiTrash size={"20px"} style={{ color: "#A700D0" }} />
                                </button>
                            </td>
                        </tr>                                            
                    ))
                    : null}
            </table>
        </div>
    );
};

export default ConteudoEstudantes;
