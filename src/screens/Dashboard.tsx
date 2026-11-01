import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useMedicoes } from '../context/MedicoesContext';
import { classificarIMC } from '../utils/imc';
import MedicaoCard from '../components/MedicaoCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function Dashboard({ navigation }: Props) {
  const { medicoes } = useMedicoes();
  const ultima = medicoes[0];

  return (
    <View style={styles.container}>
      <View style={styles.resumo}>
        <Text style={styles.resumoLabel}>Último IMC</Text>
        {ultima ? (
          <>
            <Text style={styles.resumoValor}>{ultima.imc.toFixed(1)}</Text>
            <Text style={styles.resumoClasse}>{classificarIMC(ultima.imc)}</Text>
          </>
        ) : (
          <Text style={styles.resumoClasse}>Nenhuma medição ainda</Text>
        )}
      </View>

      <Text style={styles.titulo}>Histórico</Text>
      <FlatList
        data={medicoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MedicaoCard medicao={item} />}
        ListEmptyComponent={
          <Text style={styles.vazio}>Toque em "Nova medição" para começar.</Text>
        }
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
  vazio: { textAlign: 'center', color: '#6b7280', marginTop: 24 },
  botao: {
    backgroundColor: '#2E5E4E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
