import { AiOutlineCloseCircle } from "react-icons/ai";

import "./AvisoCadastro.css";
import { Link } from "react-router-dom";


const AvisoCadastro = ({ fecharAviso }) => {
    return (
        <>
            <div className="aviso">
                <div className="aviso__conteudo">
                    <span>Cadastro realizado com sucesso!</span>
                    <Link to={"/estudantes"} style={{textDecoration: "none"}}>
                        <button className="aviso__fechar" onClick={fecharAviso}>
                            <AiOutlineCloseCircle size={20}/>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AvisoCadastro;
