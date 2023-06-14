import BarraPesquisa from "../../componentes/BarraPesquisa";
import BarraResponsiva from "../../componentes/BarraResponsiva";
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
                <BarraResponsiva />
            </div>      
        </div>
    )
}

export default PaginaInicial;
