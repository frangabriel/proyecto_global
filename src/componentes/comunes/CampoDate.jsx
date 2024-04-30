import React from 'react'
import '../../App.css'

export const CampoDate = ({title, id}) => {
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <input type="date" id={id}/>
    </div>
  )
}