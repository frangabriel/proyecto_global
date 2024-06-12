import React from 'react'
import '../../App.css'

export const CampoDate = ({title, id, name, onChange}) => {
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <input type="date" id={id} name={name} onChange={onChange}/>
    </div>
  )
}