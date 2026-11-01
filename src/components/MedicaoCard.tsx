import { View, Text, StyleSheet } from 'react-native';
import { Medicao } from '../types/medicao';
import { classificarIMC, corIMC } from '../utils/imc';

type Props = {
  medicao: Medicao;
};

export default function MedicaoCard({ medicao }: Props) {
  const data = new Date(medicao.data).toLocaleDateString('pt-BR');
  const cor = corIMC(medicao.imc);

  return (
    <View style={[styles.card, { borderLeftColor: cor }]}>
      <View>
        <Text style={styles.data}>{data}</Text>
        <Text style={styles.detalhe}>
          {medicao.peso} kg · {medicao.altura} m
        </Text>
      </View>
      <View style={styles.direita}>
        <Text style={[styles.imc, { color: cor }]}>{medicao.imc.toFixed(1)}</Text>
        <Text style={[styles.classe, { color: cor }]}>{classificarIMC(medicao.imc)}</Text>
      </View>
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
    borderLeftWidth: 6,
  },
  data: { fontSize: 15, fontWeight: 'bold' },
  detalhe: { fontSize: 13, color: '#6b7280' },
  direita: { alignItems: 'flex-end' },
  imc: { fontSize: 20, fontWeight: 'bold' },
  classe: { fontSize: 12, fontWeight: 'bold' },
});
