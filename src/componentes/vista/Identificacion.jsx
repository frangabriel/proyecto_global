import React from 'react'
import { CampoInput } from '../comunes/CampoInput'
import { CampoDate } from '../comunes/CampoDate'
import { CampoTime } from '../comunes/CampoTime'
import { CampoSelect } from '../comunes/CampoSelect'
import { CampoTextArea } from '../comunes/CampoTextArea'
import { generos } from '../../Data/opcionesGenero.js'

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
        <div className='fila'>
            <CampoInput title='Tipo de identificacion' id='tipoidentificacion' name='tipoidentificacion' />
            <CampoInput title='Numero de identificacion' id='numeroidentificacion' name='numeroidentificacion'/>
            <CampoInput title='Estado civil' id='estadocivil' name='estadocivil' />
            <CampoInput title='Ocupacion' id='ocupacion' name='ocupacion'/>
        </div>
        <div className='fila'>
            <CampoDate title='Fecha de nacimiento' id='nacimiento' name='nacimiento' />
            <CampoInput title='Edad' id='edad' name='edad'/>
            <CampoInput title='Telefono' id='telefono' name='telefono' />
            <CampoSelect title='Sexo' id='sexo' name='sexo' opciones={generos}/>
        </div>
        <div className='fila'>
            <CampoInput title='Direccion habitual' id='direccionhabitual' name='direccionhabitual' />
            <CampoInput title='Zona' id='zona' name='zona'/>
            <CampoInput title='Ciudad' id='ciudadresidencia' name='ciudadresidencia' />
            <CampoInput title='Departamento' id='departamentoresidencia' name='departamentoresidencia'/>
        </div>
        <div className='fila'>
            <CampoInput title='Nombre acompañante' id='nombreacompañante' name='nombreacompañante' />
            <CampoInput title='Telefono acompañante' id='telefonoacompañante' name='telefonoacompañante'/>
            <CampoInput title='Parentezco acompañante' id='parentezcoacompañante' name='parentezcoacompañante' />
            <CampoInput title='Celular acompañante' id='celularacompañante' name='celularacompañante'/>
        </div>
        <div className='fila'>
            <CampoInput title='Direccion ocurrencia' id='direccionocurrencia' name='direccionocurrencia' />
            <CampoInput title='Zona' id='zonao' name='zonao'/>
            <CampoInput title='Ciudad ocurrencia' id='ciudadocurrencia' name='ciudadocurrencia' />
            <CampoInput title='Departamento ocurrencia' id='departamentoocurrencia' name='departamentoocurrencia'/>
        </div>
        <div className='fila'>
            <CampoInput title='Tipo de accidente' id='tipodeaccidente' name='tipodeaccidente' />
            <CampoInput title='Tipo de vehiculo' id='tipodevehiculo' name='tipodevehiculo'/>
            <CampoInput title='Marca' id='marca' name='marca' />
            <CampoInput title='Placa' id='placa' name='placa'/>
        </div>
        <div className='fila'>
            <CampoInput title='Numero de Seguro' id='numeroseguro' name='numeroseguro' />
            <CampoInput title='Poliza' id='poliza' name='poliza'/>
        </div>
        <div>
            <CampoTextArea title='Informe o motivo de solicitud de servicio' id='informe' name='informe'/>
        </div>
        <hr className='linea'/>
        <span className='subtitulo'>Examen fisico</span>
        <div className='fila'>
            <CampoInput title='Frecuencia cardiaca' id='frecardiaca' name='frecardiaca' />
            <CampoInput title='Frecuencia respiratoria' id='frecrespiratoria' name='frecrespiratoria'/>
            <CampoInput title='Presión arterial' id='presarterial' name='presarterial' />
            <CampoInput title='Temperatura' id='temperatura' name='temperatura'/>
        </div>
        <hr className='linea'/>
        <span className='subtitulo'>Glasgow</span>
        <div className='fila'>
            <CampoInput title='RO' id='ro' name='ro' />
            <CampoInput title='RV' id='rv' name='rv'/>
            <CampoInput title='RM' id='rm' name='rm' />
            <CampoInput title='Total' id='total' name='total'/>
        </div>
    </section>
  )
}
