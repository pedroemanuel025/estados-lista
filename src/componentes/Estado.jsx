import "./Estado.css"

function Estado({ nome, sigla, regiao }) {
    return (
        <div className="card-estado">
            <h2>{sigla}</h2>
            <h3>{nome}</h3>
            <p>Região: {regiao}</p>
        </div>
    );
}

export default Estado;