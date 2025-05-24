import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Screen1 from './Screens/Screen1';
import Component2 from './Components/Component2'
import Component3 from './Components/Component3';
import Component1 from './Components/Component1';
const Stack=createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Pikachu App'>
      <Stack.Screen name='Todo App' component={Component1
      }/>
      <Stack.Screen name='Pikachu App' component={Component2}/>
      <Stack.Screen name='Navigator' component={Screen1}/> 
      <Stack.Screen name='Profile Card' component={Component3}/>     
    </Stack.Navigator>
   </NavigationContainer>
  );
}


