/* eslint-disable no-debugger */
import { useContext, useEffect } from 'react';
import { CampoTextArea } from '../comunes/CampoTextArea'; 
import { EstadoGlobalContext } from '../context/EstadoGlobalContext';

export const Diagnostico = () => {
  const { estadoGlobal, setEstadoGlobal } = useContext(EstadoGlobalContext);

  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setEstadoGlobal(prevState => ({
      ...prevState,
      diagnostico: {
        ...prevState.diagnostico,
        [name]: value
      }
    }));
  };

  useEffect(() => {
    console.log(estadoGlobal);
  }, [estadoGlobal]);

  return (
    <div className='container-diagnostico'>
      <div>
        <CampoTextArea title='Diagnostico' id='diagtextarea' name='diagtextarea' onChange={handleChange}/>
      </div>
      <div>
        <CampoTextArea title='CIE-10' id='cie10' name='cie10' onChange={handleChange}/>
      </div>
    </div>
  );
};
