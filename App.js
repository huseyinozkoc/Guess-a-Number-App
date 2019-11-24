import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

import Header from './components/Header';
import StartGameScreen from'./components/screens/StartGameScreen';


export default function App() {

  

   
  return (
    <View style={styles.screen}>
      
      <Header/> 
      <StartGameScreen/>

    </View>
  );

  
}

const styles = StyleSheet.create({
  screen : {
    flex:1,
   
  



  }
});
