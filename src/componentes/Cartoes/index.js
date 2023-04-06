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
                icone={<BsBookmark size={ "40px" } style={{ color: "#FFFFFF" }}/>}
                titulo={"Cursos"} 
                subtitulo={"13"} 
            />
            <Cartao 
                icone={<SlGraduation size={ "40px" } style={{ color: "#FFFFFF" }}/>}
                titulo={"Estudantes"}
                subtitulo={"243"} 
            />
            <Cartao 
                icone={<AiOutlineDollarCircle size={ "40px" } style={{ color: "#FFFFFF" }}/>}
                titulo={"Pagamentos"} 
                subtitulo={"556,000"} 
            />
            <Cartao 
                icone={<HiOutlineDocumentText size={ "40px" } style={{ color: "#FFFFFF" }}/>}
                titulo={"Relatórios"} 
                subtitulo={"3"}
            />
        </div>
    )
}

export default Cartoes;
