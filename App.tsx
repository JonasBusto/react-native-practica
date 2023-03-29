import React from 'react';
import Home from './src/Components/Home';
import Login from './src/Components/Login';
import Register from './src/Components/Register';
import Counter from './src/Components/Counter';
import Characters from './src/Components/Characters';
import Character from './src/Components/Character';
import Game1 from './src/Components/Game1';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game-1" component={Game1} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Characters" component={Characters} />
        <Stack.Screen name="Character" component={Character} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
