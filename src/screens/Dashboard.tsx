import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Medicao } from '../types/medicao';
import MedicaoCard from '../components/MedicaoCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

// Etapa 2: dados de exemplo (na Etapa 3 viram dados reais)
const medicoesExemplo: Medicao[] = [
  { id: '1', data: '2026-10-31T10:00:00', peso: 75.5, altura: 1.75, imc: 24.7 },
  { id: '2', data: '2026-10-24T10:00:00', peso: 77, altura: 1.75, imc: 25.1 },
  { id: '3', data: '2026-10-17T10:00:00', peso: 78.2, altura: 1.75, imc: 25.5 },
];

export default function Dashboard({ navigation }: Props) {
  const ultima = medicoesExemplo[0];

  return (
    <View style={styles.container}>
      <View style={styles.resumo}>
        <Text style={styles.resumoLabel}>Último IMC</Text>
        <Text style={styles.resumoValor}>{ultima.imc.toFixed(1)}</Text>
        <Text style={styles.resumoClasse}>Normal</Text>
      </View>

      <Text style={styles.titulo}>Histórico</Text>
      <FlatList
        data={medicoesExemplo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MedicaoCard medicao={item} />}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('NovoCalculo')}
      >
        <Text style={styles.botaoTexto}>+ Nova medição</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f3f4f6' },
  resumo: {
    backgroundColor: '#2E5E4E',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  resumoLabel: { color: '#d1fae5', fontSize: 14 },
  resumoValor: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  resumoClasse: { color: '#fff', fontSize: 16 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  botao: {
    backgroundColor: '#2E5E4E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
