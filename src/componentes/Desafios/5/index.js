import React from 'react';

import './style.css';
import EstruturaPagina from '../../EstruturaPagina'

function Retorna_Vogais() {
    let str = document.getElementById("string").value
    str = str.toLowerCase();
    let vetor = [];
    vetor = str.split('')
    let cont = 0;
    for (let i = 0; i < vetor.length; i++) {
        let c = vetor[i];
        if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
            cont += 1;
        }
    }
    document.getElementById("Vogais").value = cont;
}

const Exercicio5 = () => {
    return (
        <EstruturaPagina>
            <div className="limita-container">
                <div className="div-form">
                    <div className="form">
                        <p className="content">Insira uma palavra para fazer a contagem de vogais:</p>
                        <input type="text" placeholder="Insira a palavra" id="string" className="inputs" />
                        <input type="button" value="Enviar" className="botao" onClick={Retorna_Vogais} />
                        <label className="form-label">Quantidade de vogais: </label>
                        <input type="text" id="Vogais" className="inputs" disabled />
                    </div>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Exercicio5;