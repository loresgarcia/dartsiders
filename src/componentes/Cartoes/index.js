import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineDocumentText } from "react-icons/hi";

import Cartao from "../Cartao";

import "./Cartoes.css";

const Cartoes = () => {
    return (
        <div className="cartoes">
            <Cartao 
                icone={<BsBookmark size={ "40px" } 
                style={{ color: "#FFFFFF" }}/>}
                titulo={"Cursos"} 
                subtitulo={"13"}
                link={"/cursos"} // passando as props
            />
            <Cartao 
                icone={<SlGraduation size={ "40px" } 
                style={{ color: "#FFFFFF" }}/>}
                titulo={"Estudantes"}
                subtitulo={"243"} 
                link={"/estudantes"}
            />
            <Cartao 
                icone={<AiOutlineDollarCircle size={ "40px" } 
                style={{ color: "#FFFFFF" }}/>}
                titulo={"Pagamentos"} 
                subtitulo={"556,000"}
                link={"/pagamentos"} 
            />
            <Cartao 
                icone={<HiOutlineDocumentText size={ "40px" } 
                style={{ color: "#FFFFFF" }}/>}
                titulo={"Relatórios"} 
                subtitulo={"3"}
                link={"/relatorios"}
            />
        </div>
    )
}

export default Cartoes;
