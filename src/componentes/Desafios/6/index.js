import React from 'react';

import './style.css';
import EstruturaPagina from '../../EstruturaPagina'

function InvertePalavra() {
    let str = document.getElementById("string").value
    str = str.split('').reverse('').join('');
    document.getElementById("Inverso").value = str;
}

const Exercicio6 = () => {
    return (
        <EstruturaPagina>
            <div className="limita-container">
                <div className="div-form">
                    <div className="form">
                        <p className="content">Insira uma palavra para fazer a reversão:</p>
                        <input type="text" placeholder="Insira a palavra" id="string" className="inputs" />
                        <input type="button" value="Enviar" className="botao" onClick={InvertePalavra} />
                        <label className="form-label">Palavra invertida: </label>
                        <input type="text" id="Inverso" className="inputs" disabled />
                    </div>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Exercicio6;