import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Oxigenaciòn", value: "oxigenacion" },
  { label: "Aspiración", value: "aspiracion" },
  { label: "Ventilación", value: "ventilacion" },
  { label: "Intubación", value: "intubacion" },
  { label: "Rccp", value: "rccp" },
  { label: "ventilacion mecánica", value: "ventilacion_mecanica" },
  { label: "Monitoreo", value: "monitoreo" },
  { label: "Sutura", value: "sutura" },
  { label: "Compresion", value: "compresion" },
  { label: "Vendas", value: "vendas" },
  { label: "Inmovilizacion", value: "inmovilizacion" },
  { label: "Collar cervical", value: "collar_cervical" },
  { label: "Parto", value: "parto" },
  { label: "Apsesia", value: "apsesia" },
  { label: "Infusión de liquidos", value: "infusion_liquidos" },
  { label: "Administracion de medicamentos", value: "adm_medicamentos" },
  { label: "Descompresion", value: "descompresion" },
];

export const CampoSelectMultiple = () => {
  const [selected, setSelected] = useState([]);
  console.log(selected);

  return (
    <div>
      <label className="titulomultiselect">Seleciona un o varios</label>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

