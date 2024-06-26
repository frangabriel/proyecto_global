/* eslint-disable no-debugger */
import { useState, useEffect, useContext } from 'react';
import { CampoInput } from '../comunes/CampoInput';
import { CampoDate } from '../comunes/CampoDate';
import { CampoTime } from '../comunes/CampoTime';
import { CampoSelect } from '../comunes/CampoSelect';
import { CampoTextArea } from '../comunes/CampoTextArea';
import { generos } from '../../Data/opcionesGenero.js';
import { EstadoGlobalContext } from '../context/EstadoGlobalContext';

export const Identificacion = () => {
    const { estadoGlobal, setEstadoGlobal } = useContext(EstadoGlobalContext);
  
    const handleChange = (e) => {
      debugger;
      const { name, value } = e.target;
      setEstadoGlobal(prevState => ({
        ...prevState,
        identificacion: {
          ...prevState.identificacion,
          [name]: value
        }
      }));
    };
  
    useEffect(() => {
      console.log(estadoGlobal);
    }, [estadoGlobal]);


    return (
        <section className='identificacion'>
            <div className='fila'>
                <CampoInput title='Número de placa' id='placa' name='placa' onChange={handleChange} />
                <CampoInput title='Móvil' id='movil' name='movil' onChange={handleChange} />
            </div>
            <div className='fila'>
                <CampoInput title='Nombres y apellidos' id='nombreyapellido' name='nombreyapellido' onChange={handleChange} />
                <CampoDate title='Fecha' id='fecha' name='fecha' onChange={handleChange} />
                <CampoTime title='Hora' id='hora' name='hora' onChange={handleChange} />
                <CampoInput title='Prioridad' id='prioridad' name='prioridad' onChange={handleChange} />
            </div>
            <div className='fila'>
                <CampoInput title='Tipo de identificación' id='tipoidentificacion' name='tipoidentificacion' onChange={handleChange} />
                <CampoInput title='Número de identificación' id='numeroidentificacion' name='numeroidentificacion' onChange={handleChange} />
                <CampoInput title='Estado civil' id='estadocivil' name='estadocivil' onChange={handleChange} />
                <CampoInput title='Ocupación' id='ocupacion' name='ocupacion' onChange={handleChange} />
            </div>
            <div className='fila'>
                <CampoDate title='Fecha de nacimiento' id='nacimiento' name='nacimiento' onChange={handleChange} />
                <CampoInput title='Edad' id='edad' name='edad' onChange={handleChange} />
                <CampoInput title='Teléfono' id='telefono' name='telefono' onChange={handleChange} />
                <CampoSelect title='Sexo' id='sexo' name='sexo' opciones={generos} onChange={handleChange} />
            </div>
            <div className='fila'>
                <CampoInput title='Dirección habitual' id='direccionhabitual' name='direccionhabitual' onChange={handleChange} />
                <CampoInput title='Zona' id='zona' name='zona' onChange={handleChange} />
                <CampoInput title='Ciudad' id='ciudadresidencia' name='ciudadresidencia' onChange={handleChange} />
                <CampoInput title='Departamento' id='departamentoresidencia' name='departamentoresidencia' onChange={handleChange} />
            </div>
            <div className='fila'>
                <CampoInput title='Nombre acompañante' id='nombreacompañante' name='nombreacompañante' onChange={handleChange} />
                <CampoInput title='Teléfono acompañante' id='telefonoacompañante' name='telefonoacompañante' onChange={handleChange} />
                <CampoInput title='Parentezco acompañante' id='parentezcoacompañante' name='parentezcoacompañante' onChange={handleChange} />
                <CampoInput title='Celular acompañante' id='celularacompanante' name='celularacompanante' onChange={handleChange} />
            </div>
            <div className='fila'>
                <CampoInput title='Dirección ocurrencia' id='direccionocurrencia' name='direccionocurrencia' onChange={handleChange} />
                <CampoInput title='Zona' id='zonao' name='zonao' onChange={handleChange} />
                <CampoInput title='Ciudad ocurrencia' id='ciudadocurrencia' name='ciudadocurrencia' onChange={handleChange} />
                <CampoInput title='Departamento ocurrencia' id='departamentoocurrencia' name='departamentoocurrencia' onChange={handleChange} />
            </div>
            <div className='fila'>
                <CampoInput title='Tipo de accidente' id='tipodeaccidente' name='tipodeaccidente' onChange={handleChange} />
                <CampoInput title='Tipo de vehículo' id='tipodevehiculo' name='tipodevehiculo' onChange={handleChange} />
                <CampoInput title='Marca' id='marca' name='marca' onChange={handleChange} />
                <CampoInput title='Placa' id='placa' name='placa' onChange={handleChange} />
            </div>
            <div className='fila'>
                <CampoInput title='Número de Seguro' id='numeroseguro' name='numeroseguro' onChange={handleChange} />
                <CampoInput title='Póliza' id='poliza' name='poliza' onChange={handleChange} />
            </div>
            <div>
                <CampoTextArea title='Informe o motivo de solicitud de servicio' id='informe' name='informe' onChange={handleChange} />
            </div>
            <hr className='linea' />
            <span className='subtitulo'>Examen físico</span>
            <div className='fila'>
                <CampoInput title='Frecuencia cardíaca' id='frecardiaca' name='frecardiaca' onChange={handleChange} />
                <CampoInput title='Frecuencia respiratoria' id='frecrespiratoria' name='frecrespiratoria' onChange={handleChange} />
                <CampoInput title='Presión arterial' id='presarterial' name='presarterial' onChange={handleChange} />
                <CampoInput title='Temperatura' id='temperatura' name='temperatura' onChange={handleChange} />
            </div>
            <hr className='linea' />
            <span className='subtitulo'>Glasgow</span>
            <div className='fila'>
                <CampoInput title='RO' id='ro' name='ro' onChange={handleChange} />
                <CampoInput title='RV' id='rv' name='rv' onChange={handleChange} />
                <CampoInput title='RM' id='rm' name='rm' onChange={handleChange} />
                <CampoInput title='Total' id='total' name='total' onChange={handleChange} />
            </div>
        </section>
    );
};
