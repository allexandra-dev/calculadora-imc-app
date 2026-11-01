import AsyncStorage from '@react-native-async-storage/async-storage';
import { Medicao } from '../types/medicao';

// O "nome" usado para guardar a lista no celular
const CHAVE = '@imc:medicoes';

// Lê a lista salva no celular
export async function carregarMedicoes(): Promise<Medicao[]> {
  try {
    const texto = await AsyncStorage.getItem(CHAVE);
    return texto ? JSON.parse(texto) : [];
  } catch (erro) {
    console.log('Erro ao carregar:', erro);
    return [];
  }
}

// Grava a lista inteira no celular
export async function salvarMedicoes(medicoes: Medicao[]): Promise<void> {
  try {
    await AsyncStorage.setItem(CHAVE, JSON.stringify(medicoes));
  } catch (erro) {
    console.log('Erro ao salvar:', erro);
  }
}
