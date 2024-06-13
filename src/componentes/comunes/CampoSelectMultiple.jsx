/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { MultiSelect } from "react-multi-select-component";
import { EstadoGlobalContext } from '../context/EstadoGlobalContext';
import { options } from '../../Data/opcionesDatosPositivos.js';

export const CampoSelectMultiple = ({ name, id }) => {
  const { estadoGlobal, setEstadoGlobal } = useContext(EstadoGlobalContext);
  const [selected, setSelected] = useState([]);

  const handleSelectionChange = (selectedOptions) => {
    setSelected(selectedOptions);
    const values = selectedOptions.map(option => option.value);

    // Actualiza el estado global directamente
    setEstadoGlobal(prevState => ({
      ...prevState,
      hallazgos: {
        ...prevState.hallazgos,
        [name]: values
      }
    }));
  };

  useEffect(() => {
    // Puedes agregar aquí un console.log para verificar el estado actualizado
    console.log(estadoGlobal);
  }, [estadoGlobal]);

  return (
    <div>
      <label className="titulomultiselect">Selecciona uno o varios</label>
      <MultiSelect
        name={name}
        id={id}
        options={options}
        value={selected}
        onChange={handleSelectionChange}
        labelledBy="Select"
      />
    </div>
  );
};
