import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Medicao } from '../types/medicao';
import { carregarMedicoes, salvarMedicoes } from '../storage/medicoesStorage';

// O que o contexto oferece para as telas
type MedicoesContextType = {
  medicoes: Medicao[];
  adicionarMedicao: (medicao: Medicao) => void;
  limparHistorico: () => void;
};

const MedicoesContext = createContext<MedicoesContextType | null>(null);

// O "quadro de avisos" que envolve o app
export function MedicoesProvider({ children }: { children: ReactNode }) {
  const [medicoes, setMedicoes] = useState<Medicao[]>([]);
  const [carregado, setCarregado] = useState(false);

  // Etapa 4: ao abrir o app, lê a lista gravada no celular
  useEffect(() => {
    carregarMedicoes().then((lista) => {
      setMedicoes(lista);
      setCarregado(true);
    });
  }, []);

  // Etapa 4: sempre que a lista mudar, grava no celular
  useEffect(() => {
    if (carregado) {
      salvarMedicoes(medicoes);
    }
  }, [medicoes, carregado]);

  function adicionarMedicao(medicao: Medicao) {
    setMedicoes((listaAtual) => [medicao, ...listaAtual]);
  }

    // Extra: apaga todas as medições
  function limparHistorico() {
    setMedicoes([]);
  }

  return (
    <MedicoesContext.Provider value={{ medicoes, adicionarMedicao, limparHistorico }}>
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
