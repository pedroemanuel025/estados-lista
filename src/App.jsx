import "./App.css";
import { useState, useEffect } from "react";
import Estado from "./componentes/Estado";

function App() {

    const [estados, setEstados] = useState([]);

    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            .then((resposta) => resposta.json())
            .then((dados) => setEstados(dados));
    }, []);

    return (
        <div>
            <h1>Estados Brasileiros</h1>

            <div className="lista-estados">
                {estados.map((estado) => (
                    <Estado
                        key={estado.id}
                        nome={estado.nome}
                        sigla={estado.sigla}
                        regiao={estado.regiao.nome}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;