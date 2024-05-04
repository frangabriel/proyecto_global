import React from 'react'
import '../../App.css'

export const CampoSelect = ({title, id, name, opciones}) => {

  console.log(opciones)

  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <select name={name}>
          {opciones.map((opcion)=> {
            return(
              <option  ption value={opcion.value}>{opcion.name}</option>
            );
          })}
        </select>
    </div>
  )
}