import { AiOutlineHome, AiOutlineDollarCircle, AiOutlineSetting } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineDocumentText } from "react-icons/hi";

import "./MenuNavegacao.css";

const MenuNavegacao = () => {
    return (
        <nav className="navegacao">
            <ul className="navegacao__lista">
                <li className="navegacao__item navegacao__item--ativo">
                    <AiOutlineHome />
                    <span>Home</span>
                </li>
                <li className="navegacao__item">
                    <BsBookmark />
                    <span>Cursos</span>
                </li>
                <li className="navegacao__item">
                    <SlGraduation />
                    <span>Estudantes</span>
                </li>
                <li className="navegacao__item">
                    <AiOutlineDollarCircle />
                    <span>Pagamentos</span>
                </li>
                <li className="navegacao__item">
                    <HiOutlineDocumentText />
                    <span>Relatórios</span>
                </li>
                <li className="navegacao__item">
                    <AiOutlineSetting />
                    <span>Configurações</span>
                </li>
            </ul>
        </nav>        
    )
}

export default MenuNavegacao;
