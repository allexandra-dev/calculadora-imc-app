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

// Uma cor para cada faixa de IMC
export function corIMC(imc: number): string {
  if (imc < 18.5) return '#2563eb'; // azul
  if (imc < 25) return '#16a34a';   // verde
  if (imc < 30) return '#b45309';   // amarelo escuro
  if (imc < 35) return '#ea580c';   // laranja
  if (imc < 40) return '#dc2626';   // vermelho
  return '#991b1b';                 // vermelho escuro
}

