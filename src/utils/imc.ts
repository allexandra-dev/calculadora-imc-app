// Fórmula do IMC: peso dividido pela altura ao quadrado
export function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

// Faixas da Organização Mundial da Saúde (OMS)
export function classificarIMC(imc: number): string {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Normal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade grau I';
  if (imc < 40) return 'Obesidade grau II';
  return 'Obesidade grau III';
}

// Aceita "75,5" ou "75.5" e transforma em número
export function converterNumero(texto: string): number {
  return parseFloat(texto.replace(',', '.'));
}
