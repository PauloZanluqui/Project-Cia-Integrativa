import React from 'react';

import './style.css';
import EstruturaPagina from '../../EstruturaPagina'

function RetornaSalario() {
    var salario = parseFloat(document.getElementById('salario').value);
    var aumento = parseFloat(document.getElementById('aumento').value);
    var novoSalario = parseFloat(salario + (salario * aumento) / 100);
    novoSalario = parseFloat(novoSalario.toFixed(2));
    document.getElementById('SalarioAjustado').value = novoSalario;
}

const Exercicio3 = () => {
    return (
        <EstruturaPagina>
            <div className="limita-container">
                <div className="div-form">
                    <div className="form">
                        <label className="form-label">Salário(Decimal): </label>
                        <input type="number" placeholder="Informe salário" id="salario" className="inputs" />
                        <label className="form-label">Aumento(%): </label>
                        <input type="number" placeholder="Informe o percent. de aumento" id="aumento" className="inputs" />
                        <input type="button" value="Calcular" className="botao" onClick={RetornaSalario} />
                        <label className="form-label">Novo Salário: </label>
                        <input type="number" id="SalarioAjustado" className="inputs" disabled />
                    </div>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Exercicio3;