import BarraPesquisa from "../../componentes/BarraPesquisa";
import ConteudoInicio from "../../componentes/ConteudoInicio";
import MenuLateral from "../../componentes/MenuLateral";

import "./PaginaInicial.css";

const PaginaInicial = () => {
    return (
        <div className="pagina-inicial">
            <MenuLateral />
            <div>
                <BarraPesquisa />
                <ConteudoInicio />
            </div>      
        </div>
    )
}

export default PaginaInicial;
