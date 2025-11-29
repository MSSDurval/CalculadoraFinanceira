import React, { createContext, useState, useContext } from 'react';

// Chama a ContextApi
export const HistoryScreenContext = createContext();

// Criação do Registrador:
export function HistoryProvider({ children }) {
    const [historico, setHistorico] = useState([]);

    function AdicionaRegistro(metadados) {
        setHistorico(prev => [metadados, prev]);
    }

    return(
        <HistoryScreenContext.Provider value={{ historico, AdicionaRegistro }}>
            {children}
        </HistoryScreenContext.Provider>
    );
}


// Registrador:
export function Registrador(){
    return Registrador(HistoryProvider);
}