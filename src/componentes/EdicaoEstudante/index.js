import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./EdicaoEstudante.css";

const EdicaoEstudante = () => {
    const { id } = useParams();
    const [estudante, setEstudante] = useState(null);

    useEffect(() => {
        const buscarEstudante = async () => {
            try {
                const resposta = await axios.get(`http://localhost:3000/dados/${id}`);
                setEstudante(resposta.data);
            } catch (erro) {
                // Lide com erros, se necessário
            }
        };

        buscarEstudante();
    }, [id]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await axios.put(`http://localhost:3000/dados/${id}`, {
                foto: event.target.foto.value,
                nome: event.target.nome.value,
                email: event.target.email.value,
                telefone: event.target.telefone.value,
                matricula: event.target.matricula.value,
                admissao: event.target.admissao.value
            });

            // Exiba uma mensagem de sucesso ou redirecione para outra página
            alert("As alterações foram salvas com sucesso!");
        } catch (erro) {
            // Lide com erros, se necessário
            console.error(erro);
        }
    };

    if (!estudante) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="pagina-edicao-estudante">
            <h2>Editar Estudante</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="foto">Foto:</label>
                <input
                    type="text"
                    id="foto"
                    name="foto"
                    defaultValue={estudante.foto}
                    className="input-estudante"
                />

                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    defaultValue={estudante.nome}
                    className="input-estudante"
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={estudante.email}
                    className="input-estudante"
                />

                <label htmlFor="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    defaultValue={estudante.telefone}
                    className="input-estudante"
                />

                <label htmlFor="matricula">Matrícula:</label>
                <input
                    type="text"
                    id="matricula"
                    name="matricula"
                    defaultValue={estudante.matricula}
                    className="input-estudante"
                />

                <label htmlFor="admissao">Admissão:</label>
                <input
                    type="date"
                    id="admissao"
                    name="admissao"
                    defaultValue={estudante.admissao}
                    className="input-estudante"
                />

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default EdicaoEstudante;
