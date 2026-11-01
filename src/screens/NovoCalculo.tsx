import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function NovoCalculo() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Peso (kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 75.5"
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Altura (m)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1.75"
        keyboardType="decimal-pad"
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Calcular e salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f3f4f6' },
  label: { fontSize: 15, fontWeight: 'bold', marginBottom: 6, marginTop: 12 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#2E5E4E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

