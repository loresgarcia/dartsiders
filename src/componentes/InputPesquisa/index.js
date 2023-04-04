import { AiOutlineSearch } from "react-icons/ai";

import "./InputPesquisa.css";

const InputPesquisa = () => {
    return (
        <div className="input-pesquisa">
            <input type="text" placeholder="Digite sua busca" />
            <AiOutlineSearch />
        </div>
    );
};

export default InputPesquisa;
