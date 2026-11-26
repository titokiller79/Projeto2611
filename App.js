import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './janelas/home';
import Pergunta1 from './janelas/pergunta1';
import Pergunta2 from './janelas/pergunta2';
import Pergunta3 from './janelas/pergunta3';
import Pergunta4 from './janelas/Pergunta4';
import Pergunta5 from './janelas/pergunta5';
import Pergunta6 from './janelas/Pergunta6';
import Pergunta7 from './janelas/Pergunta7';
import Pergunta8 from './janelas/Pergunta8';
import Pergunta9 from './janelas/Pergunta9';
import Pergunta10 from './janelas/Pergunta10';


const Stack = createNativeStackNavigator();
export default function App() {


  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="P1"
          component={Pergunta1}
          options={{ headerShown: false }}
        />

     
        <Stack.Screen
          name="P2"
          component={Pergunta2}
          options={{ headerShown: false }}
        />

          <Stack.Screen
          name="P3"
          component={Pergunta3}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="P4"
          component={Pergunta4}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="P5"
          component={Pergunta5}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="P6"
          component={Pergunta6}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="P7"
          component={Pergunta7}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="P8"
          component={Pergunta8}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="P9"
          component={Pergunta9}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="P10"
          component={Pergunta10}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>

  ); 
}
