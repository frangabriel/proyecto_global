import React, { useState } from 'react'
import '../../App.css'

export const CampoSelect = ({title, id, name, opciones, onChange}) => {
  debugger;
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <select name={name} id={id} onChange={onChange}>
          {opciones.map((opcion,index)=> {
            return(
              <option key={index} value={opcion.value}>{opcion.name} </option>
            );
          })}
        </select>
    </div>
  )
}