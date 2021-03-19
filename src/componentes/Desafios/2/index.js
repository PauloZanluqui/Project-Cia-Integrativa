import React from 'react';

import './style.css';
import EstruturaPagina from '../../EstruturaPagina'

function Area() {
    var lado1 = parseInt(document.getElementById('lado1').value);
    var Area = Math.pow(lado1, 2);
    document.getElementById('Area').value = Area;
}

const Exercicio2 = () => {
    return (
        <EstruturaPagina>
            <div className="limita-container">
                <div className="div-form">
                    <div className="form">
                        <label className="form-label">Lado do Quadrado: </label>
                        <input type="text" placeholder="Informe o primeiro lado" id="lado1" className="inputs" />
                        <input type="button" value="Calcular" className="botao" onClick={Area} />
                        <label className="form-label">Área do Espaço: </label>
                        <input type="number" id="Area" className="inputs" disabled />
                    </div>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Exercicio2;