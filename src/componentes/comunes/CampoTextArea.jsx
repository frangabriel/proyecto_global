import React from 'react'
import '../../App.css'

export const CampoTextArea = ({title, id}) => {
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <textarea id={id}/>
    </div>
  )
}
