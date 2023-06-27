import { AiOutlineCloseCircle } from "react-icons/ai";

import "./AvisoCadastro.css";


const AvisoCadastro = ({ fecharAviso }) => {
    return (
        <>
            <div className="aviso" onClick={fecharAviso}>
                <div className="aviso__conteudo">
                    <span>Cadastro realizado com sucesso!</span>
                    <button className="aviso__fechar" onClick={fecharAviso}>
                        <AiOutlineCloseCircle size={20}/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default AvisoCadastro;
