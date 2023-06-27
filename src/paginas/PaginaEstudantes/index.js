import BarraPesquisa from "../../componentes/BarraPesquisa";
import ConteudoEstudantes from "../../componentes/ConteudoEstudantes";

import "./PaginaEstudantes.css";

const PaginaEstudantes = () => {
    return (
        <div className="pagina-estudantes">
            <div>
                <BarraPesquisa />
                <ConteudoEstudantes />
            </div>      
        </div>
    )
}

export default PaginaEstudantes;
