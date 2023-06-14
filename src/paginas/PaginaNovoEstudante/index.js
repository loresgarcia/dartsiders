import BarraPesquisa from "../../componentes/BarraPesquisa";
import BarraResponsiva from "../../componentes/BarraResponsiva";
import ConteudoNovoEstudante from "../../componentes/ConteudoNovoEstudante";
import MenuLateral from "../../componentes/MenuLateral";

import "./PaginaNovoEstudante.css";

const PaginaNovoEstudante = () => {
    return (
        <div className="pagina-inicial">
            <MenuLateral />
            <div>
                <BarraPesquisa />
                <BarraResponsiva />
                <ConteudoNovoEstudante />
            </div>      
        </div>
    )
}

export default PaginaNovoEstudante;