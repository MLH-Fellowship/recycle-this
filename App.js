import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from './Game';
import Start from './StartScreen';
import GameOver from './GameOver';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Start" component={Start} />
        <RootStack.Screen name="Game" component={Game} />
        <RootStack.Screen name="GameOver" component={GameOver} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;