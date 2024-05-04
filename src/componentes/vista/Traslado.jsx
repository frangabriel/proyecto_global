import React from 'react';
import { CampoTextArea } from '../comunes/CampoTextArea';
import { CampoTime } from '../comunes/CampoTime';
import { CampoSelect } from '../comunes/CampoSelect';
import { CampoInput } from '../comunes/CampoInput';


export const Traslado = () => {
  return (
    <div className='container-diagnostico'>
      <div className='fila'>
        <CampoInput title='Número de placa' id='placa' name='placa' />
        <CampoInput title='Móvil' id='movil' name='movil'/>
      </div>
    </div>
    
  )
}
