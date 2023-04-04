import BarraPesquisa from "../../componentes/BarraPesquisa";
import MenuLateral from "../../componentes/MenuLateral";

import "./PaginaInicial.css";

const PaginaInicial = () => {
    return (
        <div className="pagina-inicial">
            <MenuLateral />
            <BarraPesquisa />
        </div>
    )
}

export default PaginaInicial;
