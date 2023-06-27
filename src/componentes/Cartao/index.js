import { Link } from "react-router-dom";
import "./Cartao.css";

const Cartao = ({icone, titulo, subtitulo, link}) => { // recebendo as props
    return (
        <Link to={link} style={{textDecoration: "none"}}>
            <div className="cartao">
                {icone}
                <p>{titulo}</p>
                <span>{subtitulo}</span>
            </div>
        </Link>
    )
}

export default Cartao;
