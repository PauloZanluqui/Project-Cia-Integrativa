import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Menu = () => {
    return (
        <div className="space">
        <div className="menu-apresentacao">
            <div className="limitar-container">
                <h1><span>Desafios</span></h1>
                <p>
                    Escolha abaixo a opção para selecionar um desafio!
                    </p>

                <ul className="lista-servicos">
                    <li>
                        <img src="assets/icon.png" alt="logo" title="logo" />
                        <Link className="Link" to='/exercicio-1'>
                        <p>Média Simples</p>
                        </Link>
                    </li>

                    <li>
                        <img src="assets/icon.png" alt="logo" title="logo" />
                        <Link className="Link" to='/exercicio-2'>
                        <p>Área Quadrada</p>
                        </Link>
                    </li>

                    <li>
                        <img src="assets/icon.png" alt="logo" title="logo" />
                        <Link className="Link" to='/exercicio-3'>
                            <p>Reajuste de Salário</p>
                        </Link>
                    </li>

                    <li>
                        <img src="assets/icon.png" alt="logo" title="logo" />
                        <Link className="Link" to='/exercicio-4'>
                        <p>Valores de um vetor</p>
                        </Link>
                    </li>

                    <li>
                        <img src="assets/icon.png" alt="logo" title="logo" />
                        <Link className="Link" to='/exercicio-5'>
                        <p>Quantidade de vogais</p>
                        </Link>
                    </li>

                    <li>
                        <img src="assets/icon.png" alt="logo" title="logo" />
                        <Link className="Link" to='/exercicio-6'>
                        <p>Inverter String</p>
                        </Link>
                    </li>

                    <li>
                        <img src="assets/icon.png" alt="logo" title="logo" />
                        <Link className="Link" to='/exercicio-7'>
                        <p>Fatorial</p>
                        </Link>
                    </li>

                </ul>
            </div>
            </div>
        </div>
    );
}

export default Menu;