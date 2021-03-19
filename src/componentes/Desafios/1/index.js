import React from 'react';

import './style.css';
import EstruturaPagina from '../../EstruturaPagina'

function Media() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var n3 = parseInt(document.getElementById('n3').value);
    var Media = (n1 + n2 + n3) / 3;
    document.getElementById('Media').value = Media;
}

const Exercicio1 = () => {
    return (
        <EstruturaPagina>
            <div className="limita-container">
                <div className="div-form">
                    <div className="form">
                        <label className="form-label">Número 1: </label>
                        <input type="text" placeholder="Informe o primeiro número" id="n1" className="inputs" />
                        <label className="form-label">Número 2: </label>
                        <input type="text" placeholder="Informe o segundo número" id="n2" className="inputs" />
                        <label className="form-label">Número 3: </label>
                        <input type="text" placeholder="Informe o terceiro número" id="n3" className="inputs" />
                        <input type="button" value="Calcular" className="botao" onClick={Media} />
                        <label className="form-label">Média Aritmetica: </label>
                        <input type="number" id="Media" className="inputs" disabled />
                    </div>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Exercicio1;