import React from 'react';

import Rodape from '../Rodape';
import Topo from '../Topo';
import Menu from '../Menu';

const EstruturaPagina = ( props ) => {
  return (
    <section>
      <Topo />
      
      <Menu />

      { props.children }

      <Rodape />
    </section>
  );
};

export default EstruturaPagina;