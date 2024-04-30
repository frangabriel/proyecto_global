import React from 'react'
import { CampoInput } from '../comunes/CampoInput'

export const Identificacion = () => {
  return (
    <section className='identificacion'>
        <div className='fila'>
            <CampoInput title='Número de placa' id='placa' />
            <CampoInput title='Móvil' id='movil' />
        </div>
    </section>
  )
}
