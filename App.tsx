import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import NovoCalculo from './src/screens/NovoCalculo';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Meu IMC' }}
        />
        <Stack.Screen
          name="NovoCalculo"
          component={NovoCalculo}
          options={{ title: 'Novo cálculo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

