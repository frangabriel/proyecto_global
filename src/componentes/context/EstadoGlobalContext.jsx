import { createContext, useState } from 'react';

export const EstadoGlobalContext = createContext();

export const EstadoGlobalProvider = ({ children }) => {
  const [estadoGlobal, setEstadoGlobal] = useState({
    identificacion:'',
    hallazgos: '',
    diagnostico: '',
    traslado: '',
  });

  return (
    <EstadoGlobalContext.Provider value={{ estadoGlobal, setEstadoGlobal }}>
      {children}
    </EstadoGlobalContext.Provider>
  );
};