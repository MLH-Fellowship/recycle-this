
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
const Start = ({navigation}) => {
    return(
    <View>
        <Text style={styles.title}>RecycleThis!</Text>
        <Image source={require('./../assets/bear.png')} key='bear' style={[styles.bear]}/>
        <Button
        title="PLAY"
        onPress={() => navigation.navigate('Game', {startAgain: false})}
      />
    </View>
    );
  };

  
const styles = StyleSheet.create({
    title: {
        textAlign: 'center'
    },
    bear: {
      borderRadius: 20 * 2,
      width: 200 * 2,
      height: 200 * 2,
      position: "absolute"
    }
  
  });
   
  export default Start;