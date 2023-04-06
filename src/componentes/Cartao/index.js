import "./Cartao.css";

const Cartao = ({icone, titulo, subtitulo}) => { // recebendo as props
    return (
        <div className="cartao">
            {icone}
            <p>{titulo}</p>
            <span>{subtitulo}</span>
        </div>
    )
}

export default Cartao;
