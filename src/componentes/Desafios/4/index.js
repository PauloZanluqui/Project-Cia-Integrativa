import React from 'react';

import './style.css';
import EstruturaPagina from '../../EstruturaPagina'

function Retorna_Maior_Menor() {
    let vetor = new Array(5);
    let str = document.getElementById("vetor").value;
    vetor = str.split(",");
    let max = Math.max(...vetor);
    let min = Math.min(...vetor);
    document.getElementById('Maior').value = max;
    document.getElementById('Menor').value = min;
}

const Exercicio4 = () => {
    return (
        <EstruturaPagina>
            <div className="limita-container">
                <div className="div-form">
                    <div className="form">
                        <p className="content">Insira 5 valores do vetor separados por vírgulas:</p>
                        <input type="text" placeholder="Digite os valores" id="vetor" className="inputs" />
                        <input type="button" value="Enviar Valores" className="botao4" onClick={Retorna_Maior_Menor} />
                        <label className="form-label">Maior Valor: </label>
                        <input type="number" id="Maior" className="inputs" disabled />
                        <label className="form-label">Menor Valor: </label>
                        <input type="number" id="Menor" className="inputs" disabled />
                    </div>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Exercicio4;