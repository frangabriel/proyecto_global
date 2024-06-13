/* eslint-disable no-debugger */
import { useContext, useEffect } from 'react';
import { CampoTextArea } from '../comunes/CampoTextArea';
import { CampoTime } from '../comunes/CampoTime';
import { CampoSelect } from '../comunes/CampoSelect';
import { CampoInput } from '../comunes/CampoInput';
import { tipoSolicitudes } from '../../Data/opcionesTipoSolicitud';
import { estadopaciente } from '../../Data/opcionesEstado';
import { condicionpaciente } from '../../Data/opcionesCondicion';
import { EstadoGlobalContext } from '../context/EstadoGlobalContext';

export const Traslado = () => {
  const { estadoGlobal, setEstadoGlobal } = useContext(EstadoGlobalContext);

  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setEstadoGlobal(prevState => ({
      ...prevState,
      traslado: {
        ...prevState.traslado,
        [name]: value
      }
    }));
  };

  useEffect(() => {
    console.log(estadoGlobal);
  }, [estadoGlobal]);

  return (
    <div className='container-diagnostico'>
      <div className='fila'>
        <CampoSelect title='Tipo de Solicitud' id='tsolicitud' name='tsolicitud' opciones={tipoSolicitudes} onChange={handleChange}/>
        <CampoTime title='Hora de salida' id='horasalida' name='horasalida' onChange={handleChange}/>
        <CampoTime title='Hora de llegada' id='horallegada' name='horallegada' onChange={handleChange}/>
        <CampoSelect title='Condicion del paciente' id='cpaciente' name='cpaciente' opciones={condicionpaciente} onChange={handleChange}/>
      </div>
      <div className='fila'>
        <CampoInput title='Transportado a:' id='transportado' name='transportado' onChange={handleChange}/>
      </div>
      <div className='fila'>
        <CampoSelect title='Estado en que se entrega' id='estadoentrega' name='estadoentrega' opciones={estadopaciente} onChange={handleChange}/>
      </div>
    </div>
  );
};
