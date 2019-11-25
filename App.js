import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

import Header from './components/Header';
import StartGameScreen from'./components/screens/StartGameScreen';
import GameScreen from './components/screens/GameScreen';

export default function App() {

  const [userNumber,setUserNumber]= useState();


  const startGameHandler = (selectedNumber) => {
   setUserNumber(selectedNumber);

  };

  let content =   <StartGameScreen onStartGame={startGameHandler}/>;
     if(userNumber) {
        content=  <GameScreen userChoice={userNumber}/>;
     }

   
  return (
    <View style={styles.screen}>
      
      <Header/> 
       {content}
     

    </View>
  );

  
}

const styles = StyleSheet.create({
  screen : {
    flex:1,
   
  



  }
});