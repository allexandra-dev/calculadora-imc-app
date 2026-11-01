import { View, Text, StyleSheet } from 'react-native';
import { Medicao } from '../types/medicao';

type Props = {
  medicao: Medicao;
};

export default function MedicaoCard({ medicao }: Props) {
  const data = new Date(medicao.data).toLocaleDateString('pt-BR');

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.data}>{data}</Text>
        <Text style={styles.detalhe}>
          {medicao.peso} kg · {medicao.altura} m
        </Text>
      </View>
      <Text style={styles.imc}>{medicao.imc.toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  data: { fontSize: 15, fontWeight: 'bold' },
  detalhe: { fontSize: 13, color: '#6b7280' },
  imc: { fontSize: 20, fontWeight: 'bold', color: '#2E5E4E' },
});
