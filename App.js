import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello WOrld hhh!</Text>
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          1: { position: [40,  200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
          2: { position: [100, 200], renderer: <Finger />}, //-- and a renderer property (optional). If no renderer
        }}>
 
        <StatusBar hidden={true} />
 
      </GameEngine>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
