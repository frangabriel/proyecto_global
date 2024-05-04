import React from 'react';
import { CampoTextArea } from '../comunes/CampoTextArea'; 


export const Diagnostico = () => {
  return (
    <div className='container-diagnostico'>
      <div>
        <CampoTextArea title='Diagnostico' id='diagtextarea' name='diagtextarea'/>
      </div>
      <div>
        <CampoTextArea title='CIE-10' id='cie10' name='cie10'/>
      </div>
    </div>
    
  )
}
