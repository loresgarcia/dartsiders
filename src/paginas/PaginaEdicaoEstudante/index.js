import BarraPesquisa from "../../componentes/BarraPesquisa";
import BarraResponsiva from "../../componentes/BarraResponsiva";
import EdicaoEstudante from "../../componentes/EdicaoEstudante";

import "./PaginaEdicaoEstudante.css";



const PaginaEdicaoEstudante = () => {
    return (
        <div className="pagina-edicao-estudante">
            <div>
                <BarraPesquisa />
                <BarraResponsiva />
                <EdicaoEstudante />
            </div>      
        </div>
    )
}

export default PaginaEdicaoEstudante;





























