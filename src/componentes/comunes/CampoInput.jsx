import React from 'react'
import '../../App.css'

export const CampoInput = ({title, id}) => {
  return (
    <div className='container-campo'>
        <label htmlFor={id}>{title}</label>
        <input type="text" id={id}/>
    </div>
  )
}
