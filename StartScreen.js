
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const Start = ({navigation}) => {
    return(
    <View>
        <Text>Start Screen</Text>
        <Button
        title="PLAY"
        onPress={() => navigation.navigate('Game')}
      />
    </View>
    );
  };
   
  export default Start;