import { VscEdit } from "react-icons/vsc";
import { FiTrash } from "react-icons/fi";

import "./ConteudoEstudantes.css";

const ConteudoEstudantes = () => {
    // foto, nome, email, telefone, matricula, admissão
    // Lista de Estudantes
    const listaDeEstudantes = [ 
        {
            foto: "https://github.com/loresgarcia.png",
            nome: "Júlia",
            email: "julia@gmail.com",
            telefone: "48 996582154",
            matricula: "1234567305477760",
            admissao: "08/12/2021",
        },
        {
            foto: "https://github.com/loresgarcia.png",
            nome: "Marcos",
            email: "marcos@gmail.com",
            telefone: "48 996582154",
            matricula: "1234567305477760",
            admissao: "08/12/2021",
        },
        {
            foto: "https://github.com/loresgarcia.png",
            nome: "Yuri",
            email: "yuri@gmail.com",
            telefone: "48 996582154",
            matricula: "1234567305477760",
            admissao: "08/12/2021",
        },
        {
            foto: "https://github.com/loresgarcia.png",
            nome: "Henrique",
            email: "henrique@gmail.com",
            telefone: "48 996582154",
            matricula: "1234567305477760",
            admissao: "08/12/2021",
        },
        {
            foto: "https://github.com/loresgarcia.png",
            nome: "Lara",
            email: "lara@gmail.com",
            telefone: "48 996582154",
            matricula: "1234567305477760",
            admissao: "08/12/2021",
        },
    ]
    
    return (
        <div className="estudantes">
            <div className="estudantes__cabecalho">
                <h1 className="estudantes__titulo">Lista de Estudantes</h1>
                <button className="estudantes__botao">Adicionar novo estudante</button>
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
                {listaDeEstudantes.map((estudante) => (
                    <tr className="tabela__estudante">
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
                ))}
                
            </table>
        </div>
    )
}

export default ConteudoEstudantes;
