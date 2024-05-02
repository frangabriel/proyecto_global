import React from 'react'
import '../../App.css'

export const CampoSelect = ({title, id}) => {
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <select className='quierosexo'>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
    </div>
  )
}