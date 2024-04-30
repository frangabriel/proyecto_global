import React from 'react'
import '../../App.css'

export const CampoTime = ({title, id}) => {
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <input type="time" id={id}/>
    </div>
  )
}