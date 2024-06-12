import React from 'react'
import '../../App.css'

export const CampoTime = ({title, id, name, onChange}) => {
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <input type="time" id={id} name={name} onChange={onChange}/>
    </div>
  )
}