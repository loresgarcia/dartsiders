import BarraPesquisa from "../../componentes/BarraPesquisa";
import ConteudoEstudantes from "../../componentes/ConteudoEstudantes";
import MenuLateral from "../../componentes/MenuLateral";

import "./PaginaEstudantes.css";

const PaginaEstudantes = () => {
    return (
        <div className="pagina-estudantes">
            <MenuLateral />
            <div>
                <BarraPesquisa />
                <ConteudoEstudantes />
            </div>      
        </div>
    )
}

export default PaginaEstudantes;
