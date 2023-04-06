import "./Cartao.css";

const Cartao = (props) => {
    console.log(props)
    return (
        <div className="cartao">
            {props.icone}
            <p>{props.titulo}</p>
            <span>{props.subtitulo}</span>
        </div>
    )
}

export default Cartao;
