
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Leaderboard from 'react-native-leaderboard';
import Constants from './../Constants';
const WIDTH = Constants.WIDTH;
const HEIGHT = Constants.HEIGHT;


const GameOver = ({route, navigation}) => {
  const [points, setPoints] = useState([{}]);
  let iconURL = 'https://www.flaticon.com/svg/static/icons/svg/860/860784.svg'

  
  const getData = async () => {
    AsyncStorage.getItem('points', (err,result) => {
      if (result !== null) {
        //console.log('Data found', result);
        setPoints(JSON.parse(result))

      }
})
  }

  useEffect(() => {
   getData();
  });

  /*
  const renderItem = ({ entry, index }) => (
    <View>
    <Text>{index+1}</Text> 
    <Text>poooints {JSON.stringify(entry)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={points}
        renderItem={(item, index) => renderItem(item, index)}
      />
    </SafeAreaView>
  );
}*/



return(
  <View style={styles.container}>
    <View>
    <Text style={styles.title}>Leaderboard</Text>
    <Text>You got </Text>
    </View>
  <Leaderboard 
  data={points} 
  sortBy='points' 
  labelBy='username'
  icon={iconURL}
  oddRowColor='lightyelllow'
  evenRowColor='peachpuff'
  containerStyle={styles.leaderboard}
  />
  </View>
)}
/*
<Text>Leaderboard {JSON.stringify(points)}</Text>
    return(
    <View style={styles.scoreboard}>
        <Text>Game Over. Your score is {route.params.points}</Text>
          <View>
          {
          points
          .sort((a,b) => a.points < b.points ? 1: -1)
          .map((entry,index) => {
            return(
            <View>
              <Text>{index+1}</Text> 
          <Text>naaame {entry.username}</Text>
          <Text>poooints {entry.points}</Text>
          </View>
          )})
        }
        </View>

        <Button
        title="Go back to menu"
        onPress={() => navigation.navigate('Start')}
      />
    </View>
    );
  };*/

  
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  leaderboard: {
    flex: 0.5,
    height: HEIGHT*0.5,
    backgroundColor: 'red',
  },
});
   
  export default GameOver;