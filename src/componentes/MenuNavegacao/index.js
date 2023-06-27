import { AiOutlineHome, AiOutlineDollarCircle, AiOutlineSetting } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineDocumentText } from "react-icons/hi";

import "./MenuNavegacao.css";
import { Link } from "react-router-dom";

const MenuNavegacao = () => {
    return (
        <nav className="navegacao">
            <ul className="navegacao__lista">
                <li className="navegacao__item navegacao__item--ativo">
                    <Link to={"/"} style={{ textDecoration: 'none' }}> 
                        <AiOutlineHome className="item__icone item__icone--ativo" />
                        <span className="item__titulo item__titulo--ativo" >Home</span>
                    </Link>
                </li>
                <li className="navegacao__item">
                    <BsBookmark className="item__icone" />
                    <span className="item__titulo">Cursos</span>
                </li>
                <li className="navegacao__item">
                    <Link to={"/estudantes"} style={{ textDecoration: 'none' }}>
                        <SlGraduation className="item__icone" />
                        <span className="item__titulo">Estudantes</span>
                    </Link>
                </li>
                <li className="navegacao__item">
                    <AiOutlineDollarCircle className="item__icone" />
                    <span className="item__titulo">Pagamentos</span>
                </li>
                <li className="navegacao__item">
                    <HiOutlineDocumentText className="item__icone" />
                    <span className="item__titulo">Relatórios</span>
                </li>
                <li className="navegacao__item">
                    <AiOutlineSetting className="item__icone" />
                    <span className="item__titulo">Configurações</span>
                </li>
            </ul>
        </nav>        
    )
}

export default MenuNavegacao;
