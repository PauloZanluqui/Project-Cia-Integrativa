import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Topo = () => {
  return (
    <header className="topo">
        <div className="topo-conteudo">
            <img className="topo-logo" src="assets/logo.jpg" alt="logo cia integrativa" title="logo cia integrativa"/>
            <Link className="Link" to="/">
            Integramaster
            </Link>
        </div>
    </header>
  );
}

export default Topo;