import "../style/card.css";

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;