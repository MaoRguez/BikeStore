import React from 'react';
import {SEO} from '../components';
import {Button, Purchase} from '../styles/components';
import {Link} from 'gatsby';

export default function cancelada() {
  return (
    <div>
      <SEO title='Compra exitosa' />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Sentimos que no hayas comprado tu bike!</p>
        <p>Recuerda que aquí seguirá por si decides volder.</p>
        <span rol='img' aria-label='emoji'>❤</span>
        <Link to='/'>
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}