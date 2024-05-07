import React from 'react'
import { CampoTextArea } from '../comunes/CampoTextArea'

export const ComponenteProcedimiento = () => {
  return (
    <section className='contenedor_procedimiento'>
        <div className='cuerpo'>
            <span>Selecione puntos de lecion en la imagen</span>
            <div></div>
        </div>
        <div className='detalles'>
            <CampoTextArea title='Procedimiento detallado' id='prodetallado' name='prodetallado'/>
        </div>
    </section>
  )
}

