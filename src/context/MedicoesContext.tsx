import { createContext, useContext, useState, ReactNode } from 'react';
import { Medicao } from '../types/medicao';

// O que o contexto oferece para as telas
type MedicoesContextType = {
  medicoes: Medicao[];
  adicionarMedicao: (medicao: Medicao) => void;
};

const MedicoesContext = createContext<MedicoesContextType | null>(null);

// O "quadro de avisos" que envolve o app
export function MedicoesProvider({ children }: { children: ReactNode }) {
  const [medicoes, setMedicoes] = useState<Medicao[]>([]);

  function adicionarMedicao(medicao: Medicao) {
    setMedicoes((listaAtual) => [medicao, ...listaAtual]);
  }

  return (
    <MedicoesContext.Provider value={{ medicoes, adicionarMedicao }}>
      {children}
    </MedicoesContext.Provider>
  );
}

// Atalho para as telas usarem o contexto
export function useMedicoes() {
  const contexto = useContext(MedicoesContext);
  if (!contexto) {
    throw new Error('useMedicoes precisa estar dentro do MedicoesProvider');
  }
  return contexto;
}
