import React from 'react'
import { CampoInput } from '../comunes/CampoInput'
import { CampoDate } from '../comunes/CampoDate'
import { CampoTime } from '../comunes/CampoTime'

export const Identificacion = () => {
  return (
    <section className='identificacion'>
        <div className='fila'>
            <CampoInput title='Número de placa' id='placa' name='placa' />
            <CampoInput title='Móvil' id='movil' name='movil'/>
        </div>
        <div className='fila'>
            <CampoInput title='Nombres y apellidos' id='nombreyapellido' name='nombreyapellido'/>
            <CampoDate title='Fecha' id='fecha' name='fecha' />
            <CampoTime title='Hora' id='hora' name='hora'/>
            <CampoInput title='Prioridad' id='prioridad' name='prioridad' />
        </div>
    </section>
  )
}
