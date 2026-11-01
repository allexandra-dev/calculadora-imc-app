# Calculadora e Histórico de IMC

Aplicativo mobile que calcula o Índice de Massa Corporal (IMC), classifica o resultado segundo as faixas da OMS e guarda o histórico de medições no celular.

## Sobre o projeto

Este é um **projeto acadêmico individual**, desenvolvido como **Projeto Prático** da disciplina de **Aplicação Mobile com React Native**, do curso de Análise e Desenvolvimento de Sistemas da Faculdade Senac Ceará.

Cada aluno desenvolveu o seu próprio aplicativo seguindo o **enunciado proposto pelo professor Thyago Menezes de  Aquino**, dividido em 5 etapas: setup e navegação, interface, estado, persistência e validação.

### Requisitos do enunciado

| Requisito | Onde foi atendido |
| --- | --- |
| Navegação entre telas (Stack) | `App.tsx` |
| Tela inicial com o último IMC e a classificação | `Dashboard.tsx` |
| Lista do histórico com FlatList (data, peso, altura e IMC) | `Dashboard.tsx` e `MedicaoCard.tsx` |
| Botão para nova medição | `Dashboard.tsx` |
| Formulário com peso e altura | `NovoCalculo.tsx` |
| Calcular, salvar e voltar atualizando a lista | `NovoCalculo.tsx` e `MedicoesContext.tsx` |
| Estado com useState e useEffect | `NovoCalculo.tsx` e `MedicoesContext.tsx` |
| Persistência com AsyncStorage | `medicoesStorage.ts` |
| Impedir o cálculo com campos vazios | `NovoCalculo.tsx` |

### Além do que foi pedido

- Projeto todo em **TypeScript**
- **Cores por faixa de IMC** no destaque e nos cards
- Classificação exibida em **cada item** do histórico
- Validações extras: letras, zero, números negativos e altura em centímetros
- Aceita **vírgula ou ponto** nos números (75,5 ou 75.5)
- Botão para **limpar o histórico**, com confirmação

## Tecnologias

- React Native com Expo (SDK 58)
- TypeScript
- React Navigation (Native Stack)
- AsyncStorage
- Hooks: useState, useEffect e useContext (Context API)

## Fórmula e classificação

IMC = peso (kg) ÷ altura (m)²

| IMC | Classificação | Cor |
| --- | --- | --- |
| Menor que 18,5 | Abaixo do peso | Azul |
| 18,5 a 24,9 | Normal | Verde |
| 25 a 29,9 | Sobrepeso | Amarelo escuro |
| 30 a 34,9 | Obesidade grau I | Laranja |
| 35 a 39,9 | Obesidade grau II | Vermelho |
| 40 ou mais | Obesidade grau III | Vermelho escuro |

## Trechos do código

### Cálculo e classificação (`src/utils/imc.ts`)

```ts
export function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

export function classificarIMC(imc: number): string {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Normal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade grau I';
  if (imc < 40) return 'Obesidade grau II';
  return 'Obesidade grau III';
}
```

### Validação do formulário (`src/screens/NovoCalculo.tsx`)

```tsx
if (peso.trim() === '' || altura.trim() === '') {
  Alert.alert('Atenção', 'Preencha o peso e a altura.');
  return;
}
```

### Persistência com AsyncStorage (`src/context/MedicoesContext.tsx`)

```tsx
// Ao abrir o app, lê a lista gravada no celular
useEffect(() => {
  carregarMedicoes().then((lista) => {
    setMedicoes(lista);
    setCarregado(true);
  });
}, []);

// Sempre que a lista mudar, grava no celular
useEffect(() => {
  if (carregado) {
    salvarMedicoes(medicoes);
  }
}, [medicoes, carregado]);
```

### Navegação (`App.tsx`)

```tsx
<Stack.Navigator initialRouteName="Dashboard">
  <Stack.Screen name="Dashboard" component={Dashboard} />
  <Stack.Screen name="NovoCalculo" component={NovoCalculo} />
</Stack.Navigator>
```

## Estrutura de pastas

```
src/
├── components/   MedicaoCard.tsx (card de cada medição)
├── context/      MedicoesContext.tsx (lista compartilhada entre as telas)
├── screens/      Dashboard.tsx e NovoCalculo.tsx (as duas telas)
├── storage/      medicoesStorage.ts (leitura e gravação no AsyncStorage)
├── types/        medicao.ts e navigation.ts (tipos do TypeScript)
└── utils/        imc.ts (cálculo, classificação e cores)
```

## Como rodar

1. Instale o [Node.js](https://nodejs.org/) (versão LTS) e o app **Expo Go** no celular.
2. Instale as dependências:

   ```
   npm install
   ```

3. Inicie o projeto:

   ```
   npx expo start
   ```

4. Escaneie o QR code com o Expo Go. O celular e o computador precisam estar na mesma rede Wi-Fi.

## Autoria

Desenvolvido por **Alexandra de Lima**, como projeto individual da disciplina.


