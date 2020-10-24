
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const GameOver = ({route, navigation}) => {
    return(
    <View>
        <Text>Game Over. Your score is {route.params.points}.</Text>
        <Button
        title="Play Again"
        onPress={() => navigation.navigate('Game')}
      />
    </View>
    );
  };
   
  export default GameOver;