import React from 'react';
import { CampoTextArea } from '../comunes/CampoTextArea';
import { CampoTime } from '../comunes/CampoTime';
import { CampoSelect } from '../comunes/CampoSelect';
import { CampoInput } from '../comunes/CampoInput';
import { tipoSolicitudes } from '../../Data/opcionesTipoSolicitud';
import { estadopaciente } from '../../Data/opcionesEstado';
import { condicionpaciente } from '../../Data/opcionesCondicion';


export const Traslado = () => {
  return (
    <div className='container-diagnostico'>
      <div className='fila'>
        <CampoSelect title='Tipo de Solicitud' id='tsolicitud' name='tsolicitud' opciones={tipoSolicitudes}/>
        <CampoTime title='Hora de salida' id='horasalida' name='horasalida'/>
        <CampoTime title='Hora de llegada' id='horallegada' name='horallegada'/>
        <CampoSelect title='Condicion del paciente' id='cpaciente' name='cpaciente' opciones={condicionpaciente}/>
      </div>
      <div className='fila'>
        <CampoInput title='Transportado a:' id='transportado' name='transportado' />
      </div>
      <div className='fila'>
        <CampoSelect title='Estado en que se entrega' id='estadoentrega' name='estadoentrega' opciones={estadopaciente}/>
      </div>
    </div>
    
  )
}
