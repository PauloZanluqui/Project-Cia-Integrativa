import React from 'react';

import './style.css';
import EstruturaPagina from '../../EstruturaPagina'

function CalculaFatorial() {
    let num = parseFloat(document.getElementById("numero").value);
    let fatorial = 1;
    for (let x = 1; x <= num; x++) {
        fatorial = fatorial * x
    }
    document.getElementById("Fatorial").value = fatorial;
}

const Exercicio7 = () => {
    return (
        <EstruturaPagina>
            <div className="limita-container">
                <div className="div-form">
                    <div className="form">
                        <p className="content">Digite um número para calcular o fatorial dele:</p>
                        <input type="number" placeholder="Digite um numero" id="numero" className="inputs" />
                        <input type="button" value="Calcular" className="botao" onClick={CalculaFatorial} />
                        <label className="form-label">Fatorial calculado: </label>
                        <input type="number" id="Fatorial" className="inputs" disabled />
                    </div>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Exercicio7;