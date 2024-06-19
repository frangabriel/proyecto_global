import { useContext } from 'react';
import '../../App.css'
import { EstadoGlobalContext } from '../context/EstadoGlobalContext';

export const BtnExcel = () => {
    const { estadoGlobal, setEstadoGlobal } = useContext(EstadoGlobalContext);

    let genero = estadoGlobal.identificacion.genero == "femenino" ? "F" : "" 

    const jsonData = [
      {"D26": "NR" + estadoGlobal.identificacion.placa},
      {"A1": genero},
      {"A1": estadoGlobal.identificacion.placa},
      {"A1": estadoGlobal.identificacion.placa},
    ];


  return (
    <div className='container-button'>
        <button id='buttonExportExcel'>
            <span className='iconExcel'></span>
            <span>Exportar Excel</span>
        </button>
    </div>
  )
}
